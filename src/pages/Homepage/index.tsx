import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
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
            <Header>
                <S.HeaderTitle>The best repositories are here</S.HeaderTitle>
                <SearchInput placeholder="Search for repositories" onChange={handleRepositoryChange} onSearch={handleRepositoryChange} />
            </Header>
            <S.LastRepositoriesContainer>
                <S.LastRepositoriesTitle>Brito&apos;s repositories</S.LastRepositoriesTitle>
                {isLoadingRepositories || isLoadingProfile ? (
                    <Loader height="calc(100vh - 80.6rem)" />
                ) : (
                    <S.RepositoryListContainer>
                        {repositories?.map(item => (
                            <RepositoryItem key={item.id} data={item} />
                        ))}
                        <Pagination page={page} totalPages={totalPages} onPageChange={newPage => dispatch(setPage(newPage))} />
                    </S.RepositoryListContainer>
                )}
            </S.LastRepositoriesContainer>
        </S.Container>
    );
};

export default Homepage;
