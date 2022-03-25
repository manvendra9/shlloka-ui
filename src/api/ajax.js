import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import get from 'lodash/get'
import responseConfig from '../model/response-config'
// import { isDev } from '../model/env'
// import { logErr } from '../utils/log'
// import history from '../history'
// import { setToken, removeUser, removeToken } from '../utils/auth'

// const host = isDev ? 'http://localhost:4000' : 'http://localhost:4000'

const cache = setupCache({
  maxAge: 0 * 1000,
  exclude: {
    query: false
  }
})

const ajax = axios.create({
  adapter: cache.adapter,
  baseURL: 'http://localhost:4000',
})

// export const getCurrentAccessToken = () => get(http, 'defaults.headers.common.x-access-token')

// const responseHandler = res => {
//   // window.debug && window.debug('http response is ', res)
//   switch (res.status) {
//     case responseConfig.success.code:
//       return res.data

//     case responseConfig.notAllowed.code:
//     case responseConfig.unAuthorized.code:
//       removeUser()
//       removeToken()
//       history.push('/')
//       break

//     case responseConfig.tooLarge.code:
//       Promise.reject('Request Entity Too Large')
//       break

//     case responseConfig.badRequest.code:
//     case responseConfig.notFound.code:
//     case responseConfig.serverError.code:
//     case responseConfig.requestDataError.code:
//       Promise.reject(res)
//       break

//     default:
//       Promise.reject(res || 'unknown server error!!')
//   }
// }

// const errorHandler = err => {
//   const errorCode = get(err, 'response.data.status')
//   const errorMessage = get(err, 'response.data.message')

//   logErr(err)

//   if (errorCode === responseConfig.unAuthorized.code) {
//     removeUser()
//     removeToken()
//     history.push('/')
//     return
//   }

//   if (errorCode === responseConfig.serverError.code && errorMessage === 'EXPIRED') {
//     removeUser()
//     removeToken()
//     history.push('/signin')
//   }

//   throw err
// }

// const httpRequest = option => (typeof option === 'string' ? http.get(option) : http(option))

// const ajax = option => {
//   // window.debug && window.debug('http request is, ', option)
//   try {
//     return httpRequest(option)
//       .then(responseHandler)
//       .catch(errorHandler)
//   } catch (error) {
//     logErr(error)
//     throw new Error(error)
//   }
// }

// export const setAuthorizationHeader = (token, isSet = true) => {
//   if (isSet) setToken(token)
//   http.defaults.headers.common['x-access-token'] = token
// }

export default ajax
