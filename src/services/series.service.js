export default {
	getSeries: () => fetch('http://api.tvmaze.com/search/shows?q=bad').then(res => res.json())
}