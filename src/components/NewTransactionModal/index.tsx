import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { 
        control,
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, category, price, type } = data;

        await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAT: new Date(),
        })
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                    type="text" 
                    placeholder="Descrição" 
                    {...register('description')}
                    required />
                    <input 
                    type="number"
                    placeholder="Preço" 
                    {...register('price', { valueAsNumber: true })}
                    required />
                    <input 
                    type="text" 
                    placeholder="Categoria" 
                    required 
                    {...register('category')}
                    />
                    
                    <Controller 
                        control={control}
                        name="type"
                        render={({ field }) => {
                            console.log(field);
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={ isSubmitting }>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}