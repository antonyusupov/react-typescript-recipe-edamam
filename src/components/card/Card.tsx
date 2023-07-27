
import './card.scss';


export interface displayType {
  recipe: {
    image: string,
    label: string,
    cuisineType: string[],
    source: string,
    url: string,
    calories: number
  },
  index: number

}



const Card = (props:{recievedData: displayType}) => {
  if(Object.keys(props).length === 0) {
    return <p>No Data</p>
  }

  const { image, label, cuisineType, source, url, calories } = props.recievedData.recipe;



  const formattedCtype = cuisineType[0].toLocaleUpperCase();

  return (
 
        <div className='card-main_container'>
        <div className="card-image">
          <img src={image}  alt='meal'/>
        </div>
        <div className="card-info">
          <h2> {label}</h2>
          <p>Cuisine Type : <span>{formattedCtype} </span></p>
          <p>Food Source : <span>{source}</span></p>
          <p>Calories : <span>{calories?.toFixed()} kKal </span></p>
          <a href={url} target='_blank'>Go to Recipe</a>
        </div>
      </div>
  )
}

export default Card;