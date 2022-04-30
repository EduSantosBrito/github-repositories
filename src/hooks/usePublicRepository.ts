import { useQuery } from "react-query";
import { GET_USER_PUBLIC_REPOSITORY } from "./queryKeys";
import { RepositoryData } from "./usePublicRepositories";

type RequestProps = {
    username?: string;
    repository?: string;
};

type Response = RepositoryData;

export const usePublicRepository = ({ username, repository }: RequestProps) => {
    return useQuery<Response>(
        [GET_USER_PUBLIC_REPOSITORY],
        async () => {
            const response = await fetch(`https://api.github.com/repos/${username}/${repository}`, {
                headers: { Accept: "application/vnd.github.v3.text-match+json" },
            });
            return response.json();
        },
        { enabled: !!username && !!repository },
    );
};
