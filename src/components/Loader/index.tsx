import { NewtonsCradle } from "@uiball/loaders";
import * as S from "./styled";

type LoaderProps = {
    height?: string;
};

const Loader = ({ height }: LoaderProps) => {
    return (
        <S.Container height={height}>
            <NewtonsCradle size={40} speed={1.4} color="var(--on-dark-blue)" />
        </S.Container>
    );
};

export default Loader;
