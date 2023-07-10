import {Card, Col} from "react-bootstrap"
import { XCircle } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { consultarListaColores, consultarBorrarColor } from "../helpers/queries";

const CardColor = ({color, setColores}) => {
  const colorCard = { background: color.nombreColor };  
  
  const borrarColor = () =>{
    Swal.fire({
      title: `¿Estás seguro de borrar el color ${color.nombreColor}?`,
      text: "No se puede revertir esta paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
        consultarBorrarColor(color.id).then((respuesta) =>{
          console.log(respuesta)
          if(respuesta.status === 200){
            Swal.fire(
              'Eliminado',
              `El color ${color.nombreColor} fue eliminado`,
              'success'
            );
            consultarListaColores().then((respuesta) => 
            setColores(respuesta))
          } else{
            Swal.fire(
              'Ocurrió un error',
              `El color ${color.nombreColor} no pudo ser eliminado`,
              'error'
            )
          }
        })
      }
    })
  }
  return (
        <Col>
          <Card>
          <div style={colorCard} className="fondoColor w-100" ></div>
            <Card.Body className="text-center">
              <Card.Title>{color.nombreColor}</Card.Title>
              <button className="btn btn-danger rounded-5" onClick={borrarColor}><XCircle className="text-white"/></button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardColor;