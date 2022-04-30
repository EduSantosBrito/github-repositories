import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../ducks";
import { GET_BRITO_LAST_UPDATED_REPOSITORIES } from "./queryKeys";
import { RepositoryData } from "./usePublicRepositories";

export const useBritoLastUpdatedRepositories = () => {
    const page = useSelector((store: RootState) => store.homepage.page);
    const perPage = useSelector((store: RootState) => store.homepage.perPage);

    return useQuery<RepositoryData[]>([GET_BRITO_LAST_UPDATED_REPOSITORIES, page], async () => {
        const searchParams = new URLSearchParams();
        searchParams.set("sort", "updated");
        searchParams.set("page", page.toString());
        searchParams.set("per_page", perPage.toString());
        searchParams.set("type", "owner");
        const response = await fetch(`https://api.github.com/users/edusantosbrito/repos?${searchParams.toString()}`, {
            headers: { Accept: "application/vnd.github.v3.text-match+json" },
        });
        return response.json();
    });
};
