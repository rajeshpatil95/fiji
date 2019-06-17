const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Failed..!!');
            return {
                ...state,
                authError: 'Login failed..!!'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login Success..!!');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_ERROR':
            console.log('SignOut Failed..!!');
            return {
                ...state,
                authError: 'SignOut Failed..!!'
            };
        case 'SIGNOUT_SUCCESS':
            console.log('SignOut Success..!!');
            return {
                ...state,
                authError: null
            };

        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success..!!');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('SignUp Failed..!!');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
    return state;
}

export default authReducer;