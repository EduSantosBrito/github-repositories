import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../ducks";
import { GET_USER_PUBLIC_REPOSITORIES } from "./queryKeys";

type RequestProps = {
    repository: string;
};

type RepositoryOwner = {
    avatar_url: string;
    login: string;
};

export type RepositoryData = {
    id: number;
    clone_url: string;
    watchers_count: number;
    open_issues_count: number;
    stargazers_count: number;
    name: string;
    description: string | null;
    visibility: "public" | "private";
    owner: RepositoryOwner;
    default_branch: string;
};

type Response = {
    total_count: number;
    incomplete_results: boolean;
    items: RepositoryData[];
};

export const usePublicRepositories = ({ repository }: RequestProps) => {
    const page = useSelector((store: RootState) => store.results.page);
    const perPage = useSelector((store: RootState) => store.results.perPage);

    return useQuery<Response>(
        [GET_USER_PUBLIC_REPOSITORIES, repository, page],
        async () => {
            const searchParams = new URLSearchParams();
            searchParams.set("q", repository);
            searchParams.set("page", page.toString());
            searchParams.set("per_page", perPage.toString());
            const response = await fetch(`https://api.github.com/search/repositories?${searchParams.toString()}`, {
                headers: { Accept: "application/vnd.github.v3.text-match+json" },
            });
            return response.json();
        },
        { enabled: !!repository },
    );
};
