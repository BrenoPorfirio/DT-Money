import { useContext } from "react";
import { SumarryCard, SumarryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Sumarry() {
    const { transactions } = useContext(TransactionsContext);
    console.log(transactions);
    
    return (
        <SumarryContainer>
            <SumarryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumarryCard>

            <SumarryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumarryCard>

            <SumarryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumarryCard>
        </SumarryContainer>
    )
}