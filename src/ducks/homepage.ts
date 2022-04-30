// TYPES
const SET_PAGE = "homepage/SET_PAGE";

export type State = {
    page: number;
    perPage: number;
};

type Action = {
    type: string;
    payload: Partial<State>;
};

// INITIAL STATE
const initialState: State = {
    page: 1,
    perPage: 10,
};

// REDUCER
const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case SET_PAGE:
        return { ...state, page: action.payload.page };
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
