// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const apiClient = create({
  baseURL: 'http://127.0.0.1:5000/api',
})


export default apiClient