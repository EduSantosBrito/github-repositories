import { ReactNode } from "react";
import * as S from "./styled";

type HeaderProps = {
    small?: boolean;
    children: ReactNode;
};

const Header = ({ small = false, children }: HeaderProps) => {
    return <S.Container small={small}>{children}</S.Container>;
};

export default Header;
