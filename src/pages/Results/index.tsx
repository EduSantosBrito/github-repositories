import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import RepositoryItem from "../../components/RepositoryItem";
import SearchInput from "../../components/SearchInput";
import { RootState } from "../../ducks";
import { setPage, setRepository } from "../../ducks/results";
import { useBritoProfile } from "../../hooks/useBritoProfile";
import { usePublicRepositories } from "../../hooks/usePublicRepositories";

const Results = () => {
    const dispatch = useDispatch();
    const repository = useSelector((store: RootState) => store.results.repository);
    const page = useSelector((store: RootState) => store.homepage.page);
    const perPage = useSelector((store: RootState) => store.homepage.perPage);
    const { data, isLoading } = usePublicRepositories({ repository });
    const { data: profile, isLoading: isLoadingProfile } = useBritoProfile();

    if (!repository) {
        return <Navigate to="/" />;
    }

    const handleRepositoryChange = (value: string) => {
        if (value) {
            dispatch(setRepository(value));
        }
    };

    const totalPages = profile ? Math.ceil(profile?.public_repos / perPage) : 1;

    return (
        <div>
            <SearchInput
                defaultValue={repository}
                label="Search repositories"
                placeholder="Write the repository name"
                onChange={handleRepositoryChange}
                onSearch={handleRepositoryChange}
            />
            {isLoading || isLoadingProfile ? (
                <div>loading...</div>
            ) : (
                <>
                    {data?.items.map(item => (
                        <RepositoryItem key={item.id} data={item} />
                    ))}
                    <Pagination page={page} totalPages={totalPages} onPageChange={newPage => dispatch(setPage(newPage))} />
                </>
            )}
        </div>
    );
};

export default Results;
