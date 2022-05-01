import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usePublicRepository } from "../../hooks/usePublicRepository";
import { useRepositoryReadme } from "../../hooks/useRepositoryReadme";
import "./github-markdown-style.css";
import Loader from "../../components/Loader";
import * as S from "./styled";
import { MouseEvent } from "react";

const Repository = () => {
    const navigate = useNavigate();
    const { username, repository } = useParams<{ username: string; repository: string }>();
    const { data: repositoryData, isLoading: isLoadingRepository } = usePublicRepository({ username, repository });
    const { data: markdown, isLoading: isLoadingReadme } = useRepositoryReadme({
        username,
        repository,
        branch: repositoryData?.default_branch,
    });

    if (!username || !repository) {
        return <Navigate to="/" />;
    }

    if (isLoadingRepository || isLoadingReadme) {
        return <Loader height="calc(100vh - 80.6rem)" />;
    }

    if (!markdown || !repositoryData) {
        return <Navigate to="/" />;
    }

    const handleGoBack = () => {
        navigate("/results");
    };

    const handlePropagation = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    };

    return (
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderTitle>{repository}</S.HeaderTitle>
            </S.HeaderContainer>
            <S.RepositoryContainer>
                <S.ResultBack aria-label="Go to results page" onClick={handleGoBack}>
                    <p>Go back</p>
                </S.ResultBack>
                <S.InfoContainer>
                    <S.RepositoryTitle>
                        <S.RepositoryLink
                            onClick={handlePropagation}
                            title={`${repositoryData.owner.login} Github Profile`}
                            href={repositoryData.owner.html_url}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <h3 aria-label="Repository owner">{repositoryData.owner.login}</h3>
                        </S.RepositoryLink>
                        <span>/</span>
                        <S.RepositoryLink
                            onClick={handlePropagation}
                            title={`${repositoryData.name} Github Page`}
                            href={repositoryData.html_url}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <h3 aria-label="Repository name">{repositoryData.name}</h3>
                        </S.RepositoryLink>
                    </S.RepositoryTitle>
                    <S.RepositoryStatsContainer>
                        <S.RepositoryStats>
                            <S.IssuesIcon aria-hidden="true" />
                            <p aria-label="Repository open issues count">{repositoryData.open_issues_count}</p>
                        </S.RepositoryStats>
                        <S.RepositoryStats>
                            <S.EyeIcon aria-hidden="true" />
                            <p aria-label="Repository watchers count">{repositoryData.watchers_count}</p>
                        </S.RepositoryStats>
                        <S.RepositoryStats>
                            <S.ForkIcon aria-hidden="true" />
                            <p aria-label="Repository forks count">{repositoryData.forks_count}</p>
                        </S.RepositoryStats>
                        <S.RepositoryStats>
                            <S.StarIcon aria-hidden="true" />
                            <p aria-label="Repository stars count">{repositoryData.stargazers_count}</p>
                        </S.RepositoryStats>
                    </S.RepositoryStatsContainer>
                </S.InfoContainer>
                <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
                    {markdown}
                </ReactMarkdown>
            </S.RepositoryContainer>
        </S.Container>
    );
};

export default Repository;
