import { createBrowserHistory } from 'history'
// import { getLocationSearch } from 'utils/common'

const history = createBrowserHistory()

history.pushWithSearch = function (url) {
//   if (getLocationSearch('userId')) {
    // history.push(url + window.location.search)
//   } else {
    history.push(url)
//   }
}

export default history
