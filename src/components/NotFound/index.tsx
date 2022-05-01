import * as S from "./styled";
import NotFoundSrc from "../../assets/images/not-found.svg";

type NotFoundProps = {
    title?: string;
};

const NotFound = ({ title }: NotFoundProps) => {
    return (
        <S.Container>
            {title && <p>{title}</p>}
            <img src={NotFoundSrc} aria-label="Not found image" />
        </S.Container>
    );
};

export default NotFound;
