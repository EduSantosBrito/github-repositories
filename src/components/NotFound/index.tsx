import * as S from "./styled";
import NotFoundSrc from "../../assets/images/not-found.svg";

const NotFound = () => {
    return (
        <S.Container>
            <img src={NotFoundSrc} aria-label="Not found image" />
        </S.Container>
    );
};

export default NotFound;
