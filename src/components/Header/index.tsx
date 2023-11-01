import { HeaderContainer, HeaderContent, NewTransactions } from "./styles";
import logoImg from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactions>Nova transação</NewTransactions>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}