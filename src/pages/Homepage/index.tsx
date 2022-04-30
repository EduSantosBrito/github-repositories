import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import RepositoryItem from "../../components/RepositoryItem";
import SearchInput from "../../components/SearchInput";
import { RootState } from "../../ducks";
import { setPage } from "../../ducks/homepage";
import { setRepository } from "../../ducks/results";
import { useBritoLastUpdatedRepositories } from "../../hooks/useBritoLastUpdatedRepositories";
import { useBritoProfile } from "../../hooks/useBritoProfile";

const Homepage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: repositories, isLoading: isLoadingRepositories } = useBritoLastUpdatedRepositories();
    const { data: profile, isLoading: isLoadingProfile } = useBritoProfile();
    const page = useSelector((store: RootState) => store.homepage.page);
    const perPage = useSelector((store: RootState) => store.homepage.perPage);

    const handleRepositoryChange = (value: string) => {
        if (value) {
            dispatch(setRepository(value));
            navigate("/results");
        }
    };

    const totalPages = profile ? Math.ceil(profile?.public_repos / perPage) : 1;

    return (
        <div>
            <SearchInput
                label="Search repositories"
                placeholder="Write the repository name"
                onChange={handleRepositoryChange}
                onSearch={handleRepositoryChange}
            />
            {isLoadingRepositories || isLoadingProfile ? (
                <div>loading...</div>
            ) : (
                <>
                    {repositories?.map(item => (
                        <RepositoryItem key={item.id} data={item} />
                    ))}
                    <Pagination page={page} totalPages={totalPages} onPageChange={newPage => dispatch(setPage(newPage))} />
                </>
            )}
        </div>
    );
};

export default Homepage;
