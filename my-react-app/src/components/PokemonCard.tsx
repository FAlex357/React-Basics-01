interface CardI {
	pokeData: {
		imgSrc?: string;
		name: string;
	};
}

const PokemonCard = ({ pokeData }: CardI) => {
	return (
		<figure>
			{pokeData.imgSrc !== undefined ? (
				<img src={pokeData.imgSrc} alt={pokeData.name} />
			) : (
				<p>???</p>
			)}
			<h1>{pokeData.name}</h1>
		</figure>
	);
};

export default PokemonCard;
