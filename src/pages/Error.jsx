import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function Error() {
  return (
    <div>
      <h1>Ha habido un error en el servidor</h1>
      <Button><Link to="/">Volver</Link></Button>
    </div>
  )
}
