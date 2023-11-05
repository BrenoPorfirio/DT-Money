import { useContext } from "react";
import { SumarryCard, SumarryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Sumarry() {
    const { transactions } = useContext(TransactionsContext);
    
    const sumarry = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === "income") {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }
            return acc;
        },
        {
            income: 0,
            outcome: 0,
            total: 0,
        }
    )

    return (
        <SumarryContainer>
            <SumarryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>{sumarry.income}</strong>
            </SumarryCard>

            <SumarryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>
                <strong>{sumarry.outcome}</strong>
            </SumarryCard>

            <SumarryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>{sumarry.total}</strong>
            </SumarryCard>
        </SumarryContainer>
    )
}