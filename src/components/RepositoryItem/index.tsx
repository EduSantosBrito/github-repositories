import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RepositoryData } from "../../hooks/usePublicRepositories";
import * as S from "./styled";

type RepositoryItemProps = {
    data: RepositoryData;
};

const RepositoryItem = ({ data }: RepositoryItemProps) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/repository/${data.owner.login}/${data.name}`);
    };

    const handlePropagation = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    };

    return (
        <S.Container onClick={handleOnClick}>
            <S.RepositoryTitle>
                <S.RepositoryLink
                    onClick={handlePropagation}
                    title={`${data.owner.login} Github Profile`}
                    href={data.owner.html_url}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <h3 aria-label="Repository owner">{data.owner.login}</h3>
                </S.RepositoryLink>
                <span>/</span>
                <S.RepositoryLink
                    onClick={handlePropagation}
                    title={`${data.name} Github Page`}
                    href={data.html_url}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <h3 aria-label="Repository name">{data.name}</h3>
                </S.RepositoryLink>
            </S.RepositoryTitle>
            {Boolean(data.description) && (
                <S.RepositoryDescription aria-label="Repository description">{data.description}</S.RepositoryDescription>
            )}
            <S.RepositoryFooter>
                <S.RepositoryStats>
                    <S.IssuesIcon aria-hidden="true" />
                    <p aria-label="Repository open issues count">{data.open_issues_count}</p>
                </S.RepositoryStats>
                <S.RepositoryStats>
                    <S.EyeIcon aria-hidden="true" />
                    <p aria-label="Repository watchers count">{data.watchers_count}</p>
                </S.RepositoryStats>
                <S.RepositoryStats>
                    <S.ForkIcon aria-hidden="true" />
                    <p aria-label="Repository forks count">{data.forks_count}</p>
                </S.RepositoryStats>
                {Boolean(data.language) && (
                    <S.RepositoryLanguage>
                        <p aria-label="Repository main language">{data.language}</p>
                    </S.RepositoryLanguage>
                )}
            </S.RepositoryFooter>
            <S.StarRepositoryStats>
                <S.StarIcon aria-hidden="true" />
                <p aria-label="Repository stars count">{data.stargazers_count}</p>
            </S.StarRepositoryStats>
        </S.Container>
    );
};

export default RepositoryItem;
