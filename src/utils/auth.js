const tokenKey = 'access-token'
const adminTokenKey = 'admin-token'
const delegateTokenKey = 'delegate-token'
const managerTokenKey = 'manager-token'
const wmTokenKey = 'wm-token'

export const setToken = token => {
  return window.localStorage.setItem(tokenKey, token)
}

export const setAdminToken = token => {
  return window.localStorage.setItem(adminTokenKey, token)
}

export const setDelegateToken = token => {
  return window.localStorage.setItem(delegateTokenKey, token)
}

export const setManagerToken = token => {
  return window.localStorage.setItem(managerTokenKey, token)
}

export const setWMToken = token => {
  return window.localStorage.setItem(wmTokenKey, token)
}

export const getToken = () => {
  return window.localStorage.getItem(tokenKey) || ''
}

export const getAdminToken = () => {
  return window.localStorage.getItem(adminTokenKey) || ''
}

export const getDelegateToken = () => {
  return window.localStorage.getItem(delegateTokenKey) || ''
}

export const getManagerToken = () => {
  return window.localStorage.getItem(managerTokenKey) || ''
}

export const getWMToken = () => {
  return window.localStorage.getItem(wmTokenKey) || ''
}

export const removeToken = () => {
  return window.localStorage.removeItem(tokenKey)
}

export const removeAdminToken = () => {
  return window.localStorage.removeItem(adminTokenKey)
}

export const removeDelegateToken = () => {
  return window.localStorage.removeItem(delegateTokenKey)
}

export const removeManagerToken = () => {
  return window.localStorage.removeItem(managerTokenKey)
}

export const removeWMToken = () => {
  return window.localStorage.removeItem(wmTokenKey)
}

export const setUser = user => {
  // window.localStorage.setItem('user', JSON.stringify({ isTPA: user.accountType === 'thirdPartyAdministrator' , ...user }))
  window.localStorage.setItem('user', JSON.stringify(user))
}

export const setAdmin = adminUser => {
  window.localStorage.setItem('admin', JSON.stringify(adminUser))
}

export const setDelegate = delegateUser => {
  window.localStorage.setItem('delegate', JSON.stringify(delegateUser))
}

export const removeUser = () => {
  window.localStorage.removeItem('user')
}

export const getUser = () => {
  var user = null

  try {
    user = JSON.parse(window.localStorage.getItem('user'))
  } catch (error) {

  }

  return user || {}
}

export const getAdminUser = () => {
  var user = null

  try {
    user = JSON.parse(window.localStorage.getItem('admin'))
  } catch (error) {

  }

  return user
}

export const getDelegateUser = () => {
  var user = null

  try {
    user = JSON.parse(window.localStorage.getItem('delegate'))
  } catch (error) {

  }

  return user
}

export const setAccountType = ({ accountType, subscribeType }) => {
  window.localStorage.setItem('accountType', JSON.stringify({ accountType, subscribeType }))
}

export const removeAccountType = () => {
  window.localStorage.removeItem('accountType')
}

export const getAccountType = () => {
  var type = null

  try {
    type = JSON.parse(window.localStorage.getItem('accountType'))
  } catch (error) {

  }

  return type
}

export const setAgree = isAgree => {
  window.localStorage.setItem('agree-policy', isAgree)
}

export const getAgree = () => window.localStorage.getItem('agree-policy')

const documentFilterKey = 'document-filter'
export const setDocumentFilter = data => window.localStorage.setItem(documentFilterKey, JSON.stringify(data))
export const getDocumentFilter = () => JSON.parse(window.localStorage.getItem(documentFilterKey))
export const removeDocumentFilter = () => window.localStorage.removeItem(documentFilterKey)
