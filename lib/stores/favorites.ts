export const favorites = useState('favorites', (): number[] => []);

export function addFavorite(id: number) {
	if (!favorites.value.includes(id)) {
		favorites.value.push(id);
	}
}

export function removeFavorite(id: number) {
	favorites.value = favorites.value.filter((fav) => fav !== id);
}
