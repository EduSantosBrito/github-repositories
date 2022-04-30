import { useQuery } from "react-query";
import { GET_BRITO_PROFILE } from "./queryKeys";

// I need that to get public_repos value, the paginated request for useBritoLastUpdatedRepositories
// isn't returning that value

type Response = {
    public_repos: number;
};

export const useBritoProfile = () => {
    return useQuery<Response>([GET_BRITO_PROFILE], async () => {
        const response = await fetch("https://api.github.com/users/edusantosbrito", {
            headers: { Accept: "application/vnd.github.v3.text-match+json" },
        });
        return response.json();
    });
};
