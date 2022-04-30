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
import * as S from "./styled";

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
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderTitle>The best repositories are here</S.HeaderTitle>
                <SearchInput
                    label="Search repositories"
                    placeholder="Write the repository name"
                    onChange={handleRepositoryChange}
                    onSearch={handleRepositoryChange}
                />
            </S.HeaderContainer>
            <S.LastRepositoriesContainer>
                <h2>Brito&apos;s repositories</h2>
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
            </S.LastRepositoriesContainer>
        </S.Container>
    );
};

export default Homepage;
