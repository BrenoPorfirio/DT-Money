import { HeaderContainer, HeaderContent, NewTransactions } from "./styles";

import logoImg from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} />
                <NewTransactions>Nova transação</NewTransactions>
            </HeaderContent>
        </HeaderContainer>
    )
}