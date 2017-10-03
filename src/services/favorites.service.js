export default {
	favorites: [],

	/**
	 * Add a serie to favorites
	 */
	addFavorite (serie) {
		this.favorites.push(serie)
	},

	/**
	 * Remove a serie from favorites
	 */
	removeFavorite (serie) {
		const favIndex = this.favorites.findIndex(item => item.id === serie.id) 
		this.favorites.splice(favIndex, 1) 
	},

	/**
	 * Check if the serie is part of favorites
	 */
	isFavorite (serie) {
		return this.favorites.find(item => item.id === serie.id)
	}
}
