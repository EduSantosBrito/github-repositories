import { useNavigate } from "react-router-dom";
import { RepositoryData } from "../../hooks/usePublicRepositories";

type RepositoryItemProps = {
    data: RepositoryData;
};

const RepositoryItem = ({ data }: RepositoryItemProps) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/repository/${data.owner.login}/${data.name}`);
    };

    return (
        <div onClick={handleOnClick}>
            <p>Name: {data.name}</p>
            <p>Description: {data.description}</p>
            <p>Visibility: {data.visibility}</p>
            <p>Watchers: {data.watchers_count}</p>
            <p>Open Issues: {data.open_issues_count}</p>
            <p>Stars: {data.stargazers_count}</p>
            <p>Clone URL: {data.clone_url}</p>
            <p>Owner name: {data.owner.login}</p>
        </div>
    );
};

export default RepositoryItem;
