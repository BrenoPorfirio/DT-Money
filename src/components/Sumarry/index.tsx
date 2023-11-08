import { SumarryCard, SumarryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSumarry";

export function Sumarry() {
    const summary = useSummary();

    return (
        <SumarryContainer>
            <SumarryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SumarryCard>

            <SumarryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SumarryCard>

            <SumarryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SumarryCard>
        </SumarryContainer>
    )
}