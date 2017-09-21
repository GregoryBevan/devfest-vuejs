import axios from 'Axios'

export default {
    getSeries: () => {
        return axios.get('http://api.tvmaze.com/search/shows?q=bad')
    }
}