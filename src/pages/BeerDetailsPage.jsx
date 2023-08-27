import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

  const params = useParams()
  const [ oneBeer, setOneBeer ] = useState(null)

  useEffect(() => {
    getData()
  }, [params.beerId])

  const getData = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      // console.log(response.data)
      setOneBeer(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (oneBeer === null) {
    return <h1>... Cargando</h1>
  }

  return (
    <div className="oneBeer">
      <img src={oneBeer.image_url} alt={oneBeer.name} width={200}/>
      <h1>{oneBeer.name}</h1>
      <h3>{oneBeer.tagline}</h3>
      <h4>{oneBeer.first_brewed}</h4>
      <h2>{oneBeer.attenuation_level}</h2>
      <p>{oneBeer.description}</p>
      <small>{oneBeer.contributed_by}</small>
    </div>
  )
}

export default BeerDetailsPage;
