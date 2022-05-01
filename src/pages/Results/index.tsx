import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import RepositoryItem from "../../components/RepositoryItem";
import SearchInput from "../../components/SearchInput";
import { RootState } from "../../ducks";
import { setPage, setRepository } from "../../ducks/results";
import { usePublicRepositories } from "../../hooks/usePublicRepositories";
import * as S from "./styled";

const Results = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const repository = useSelector((store: RootState) => store.results.repository);
    const page = useSelector((store: RootState) => store.results.page);
    const perPage = useSelector((store: RootState) => store.results.perPage);
    const { data, isLoading } = usePublicRepositories({ repository });

    if (!repository) {
        return <Navigate to="/" />;
    }

    const handleRepositoryChange = (value: string) => {
        if (value) {
            dispatch(setRepository(value));
        }
    };

    const handleGoBack = () => {
        navigate("/");
    };

    const totalPages = data ? Math.ceil(data?.total_count / perPage) : 1;

    return (
        <S.Container>
            <Header small>
                <SearchInput placeholder="Search for repositories" onChange={handleRepositoryChange} onSearch={handleRepositoryChange} />
            </Header>
            <S.ResultContainer>
                <S.ResultBack aria-label="Go to homepage" onClick={handleGoBack}>
                    <p>Go back</p>
                </S.ResultBack>
                <S.ResultTitle>Results for &quot;{repository}&quot;</S.ResultTitle>
                <S.ResultSpent>
                    {`Results in ${new Intl.DateTimeFormat("en-us", {
                        second: "numeric",
                        fractionalSecondDigits: 3,
                        hour12: false,
                    }).format(data?.spent)} seconds`}
                </S.ResultSpent>
                {isLoading ? (
                    <Loader height="calc(100vh - 34.6rem)" />
                ) : (
                    <S.ResultListContainer>
                        {data?.items.map(item => (
                            <RepositoryItem key={item.id} data={item} />
                        ))}
                        <Pagination page={page} totalPages={totalPages} onPageChange={newPage => dispatch(setPage(newPage))} />
                    </S.ResultListContainer>
                )}
            </S.ResultContainer>
        </S.Container>
    );
};

export default Results;
