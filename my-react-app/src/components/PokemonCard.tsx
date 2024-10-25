interface CardI{
pokeName : string;
imgSrc : string;

}

function PokemonCard ({pokeName, imgSrc }: CardI){


  return(

<figure>
    {imgSrc ? (<img src={imgSrc}></img>):(<p>???</p>)}  
    <figcaption>{pokeName}</figcaption>
</figure>
)

}



export default PokemonCard;



