// TYPES
const SET_PAGE = "results/SET_PAGE";
const SET_REPOSITORY = "results/SET_REPOSITORY";

export type State = {
    page: number;
    perPage: number;
    repository: string;
};

type Action = {
    type: string;
    payload: Partial<State>;
};

// INITIAL STATE
const initialState: State = {
    page: 1,
    perPage: 10,
    repository: "",
};

// REDUCER
const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case SET_PAGE:
        return { ...state, page: action.payload.page };
    case SET_REPOSITORY:
        return { ...state, repository: action.payload.repository };
    default:
        return state;
    }
};

export default reducer;

// ACTION
export const setPage = (page: number) => {
    return {
        type: SET_PAGE,
        payload: {
            page,
        },
    };
};

export const setRepository = (repository: string) => {
    return {
        type: SET_REPOSITORY,
        payload: {
            repository,
        },
    };
};
