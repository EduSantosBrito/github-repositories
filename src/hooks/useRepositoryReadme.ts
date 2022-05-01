import { useQuery } from "react-query";
import { GET_USER_REPOSITORY_README } from "./queryKeys";

type RequestProps = {
    username?: string;
    repository?: string;
    branch?: string;
};

export const useRepositoryReadme = ({ username, repository, branch }: RequestProps) => {
    return useQuery<string | null>(
        [GET_USER_REPOSITORY_README, repository],
        async () => {
            const response = await fetch(`https://raw.githubusercontent.com/${username}/${repository}/${branch}/README.md`);
            if (!response.ok) {
                return null;
            }
            return response.text();
        },
        { enabled: !!username && !!repository && !!branch },
    );
};
