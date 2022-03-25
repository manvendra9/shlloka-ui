import ajax from './ajax'

export const signup = ({ fullName, email, password }) => ajax({
    method: 'post',
    url: '/user-account/signup',
    data: {
        fullName,
        email,
        password,
    }
})

export const signin = ({ email, password }) => ajax({
    method: 'post',
    url: '/user-account/signin',
    data: {
        email,
        password,
    }
})