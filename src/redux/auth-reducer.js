const SET_AUTH_DATE = 'SET_AUTH_DATE'


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false
};

const authResucer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATE: {
            return {
                ...state,
                ...action.date,
                isAuth: true
            }
        }

        default:
            return state;
    }
}

export default authResucer;


export const setAuthDate = (id,email,login) => ({type: 'SET_AUTH_DATE', date: {id,email,login}});
