import { Header } from "../../components/Header";
import { Sumarry } from "../../components/Sumarry";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Sumarry />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%" >Desenvolvimento do site</td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%" >Hamburger</td>
                            <PriceHighlight variant="outcome">
                            - R$ 59,00
                            </PriceHighlight>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}