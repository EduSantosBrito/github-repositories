import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Navigate, useParams } from "react-router-dom";
import { usePublicRepository } from "../../hooks/usePublicRepository";
import { useRepositoryReadme } from "../../hooks/useRepositoryReadme";
import "./github-markdown-style.css";
import styled from "styled-components";
import Loader from "../../components/Loader";

const Container = styled.div`
    padding: 50px;
`;

const Repository = () => {
    const { username, repository } = useParams<{ username: string; repository: string }>();
    const { data, isLoading } = usePublicRepository({ username, repository });
    const { data: markdown, isLoading: isLoadingReadme } = useRepositoryReadme({ username, repository, branch: data?.default_branch });

    if (!username || !repository) {
        return <Navigate to="/" />;
    }

    if (isLoading || isLoadingReadme) {
        return <Loader height="calc(100vh - 80.6rem)" />;
    }

    if (!markdown) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
                {markdown}
            </ReactMarkdown>
        </Container>
    );
};

export default Repository;
