import SearchIconSrc from "../../assets/icons/icon-search.svg";
import StarIconSrc from "../../assets/icons/icon-star.svg";
import EyeIconSrc from "../../assets/icons/icon-eye.svg";
import ForkIconSrc from "../../assets/icons/icon-fork.svg";
import IssuesIconSrc from "../../assets/icons/icon-issues.svg";

export type IconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    variant: "star" | "eye" | "fork" | "issues" | "search";
};

type VariantSrc = {
    [key in "star" | "eye" | "fork" | "issues" | "search"]: string;
};

const variantsSrc: VariantSrc = {
    star: StarIconSrc,
    eye: EyeIconSrc,
    fork: ForkIconSrc,
    issues: IssuesIconSrc,
    search: SearchIconSrc,
};

const Icon = ({ variant, ...props }: IconProps) => {
    return <img src={variantsSrc[variant]} {...props} />;
};

export default Icon;
