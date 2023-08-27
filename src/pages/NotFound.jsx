import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function NotFound() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Button><Link to="/">Volver</Link></Button>
    </div>
  )
}
