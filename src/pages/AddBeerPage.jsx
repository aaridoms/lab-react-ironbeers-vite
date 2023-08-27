import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";

function AddBeerPage() {

  const [ name, setName ] = useState("");
  const [ tagline, setTagline ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ first_brewed, setFirstBrewed ] = useState("");
  const [ brewers_tips, setBrewersTips ] = useState("");
  const [ attenuation_level, setAttenuationLevel ] = useState(0);
  const [ contributed_by, setContributedBy ] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleFirstBrewedChange = (e) => {
    setFirstBrewed(e.target.value);
  }

  const handleBrewersTipsChange = (e) => {
    setBrewersTips(e.target.value);
  }

  const handleAttenuationLevelChange = (e) => {
    setAttenuationLevel(e.target.value);
  }

  const handleContributedByChange = (e) => {
    setContributedBy(e.target.value);
  }

  const handleCreateBeer = async (e) => {
    e.preventDefault()
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      navigate('/beers')
    } catch (error) {
      navigate('/error')
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="filled">
        <InputLabel htmlFor="name">Name</InputLabel>
        <FilledInput id="name" value={name} onChange={handleNameChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="tagline">Tagline</InputLabel>
        <FilledInput id="tagline" value={tagline} onChange={handleTaglineChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="description">Description</InputLabel>
        <FilledInput id="description" value={description} onChange={handleDescriptionChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="first_brewed">First Brewed</InputLabel>
        <FilledInput id="first_brewed" value={first_brewed} onChange={handleFirstBrewedChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="brewers_tips">Brewer's Tips</InputLabel>
        <FilledInput id="brewers_tips" value={brewers_tips} onChange={handleBrewersTipsChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="attenuation_level">Attenuation Level</InputLabel>
        <FilledInput id="attenuation_level" value={attenuation_level} onChange={handleAttenuationLevelChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="contributed_by">Contributed By</InputLabel>
        <FilledInput id="contributed_by" value={contributed_by} onChange={handleContributedByChange} />
      </FormControl>
      <Button type="submit" onClick={ handleCreateBeer }>Add Beer</Button>
    </Box>
  )
}

export default AddBeerPage;
