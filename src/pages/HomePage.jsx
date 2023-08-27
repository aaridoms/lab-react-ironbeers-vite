import beersImg from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="main-hub">
      <img src={beersImg} alt="" />
      <Button variant="contained"><Link to={"/beers"}>All Beers</Link></Button>

      <img src={randomBeer} alt="" />
      <Button variant="contained"><Link to={"/random-beer"}>Random Beer</Link></Button>

      <img src={newBeer} alt="" />
      <Button variant="contained"><Link to={"/new-beer"}>New Beer</Link></Button>
    </div>
  )
}

export default HomePage;
