import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import FilledInput from '@mui/material/FilledInput';

function AllBeersPage() {
  const [allBeers, setAllBers] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // console.log(response.data)
      setAllBers(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (allBeers === null) {
    return <h1>... Cargando</h1>;
  }

  return (
    <div className="allBeers">
      {allBeers.map((eachBeer) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={eachBeer.image_url}
                alt={eachBeer.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {eachBeer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {eachBeer.tagline}
                  {eachBeer.contributed_by}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id}>Ver detalles</Link>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
