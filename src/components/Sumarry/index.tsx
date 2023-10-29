import { SumarryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export function Sumarry() {
    return (
        <SumarryContainer>
            <div>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </div>

            <div>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </div>

            <div>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </div>
        </SumarryContainer>
    )
}