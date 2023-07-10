import { Form, Button, FormText} from "react-bootstrap";
import BloqueColores from "./BloqueColores";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { consultarCrearColor, consultarListaColores } from "../helpers/queries";
import Swal from "sweetalert2";

const FormularioColores = () => {
    const [colores, setColores] = useState([])
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    useEffect(()=>{
        consultarListaColores().then((respuesta) =>{
            console.log(respuesta)
            setColores(respuesta)
        })
    }, []) 

    const onSubmit = (colorNuevo) =>{
        consultarCrearColor(colorNuevo).then((respuesta)=>{
            if(respuesta && respuesta.status === 201){
                Swal.fire(`Color agregado`, `El color fue agregado`, `success`)
                reset()
            }else{
                Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`)
            }
        })
      }


    return(
    <section className="container" id="containerPrincipal">
        <h1 className="display-6 mb-0 text-center">Paleta de colores</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="justify-content-center mt-2">
        <Form.Label className="pt-4 mt-4 ms-2">Ingresa un color</Form.Label>
        <Form.Control
        type="text"
        placeholder="Ingrese un codigo hexagesimal. Ej: #FF5733"
        {...register("nombreColor", {
            required: "Debe ingresar un color",
            pattern:{
                value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                message: "Ingrese un código válido"
            }
        })}
        />
        <FormText className="text-danger">{errors.nombreColor?.message}</FormText>
        </Form.Group>
        <Button variant="primary" id="btnAgregar" type="submit" className="ms-3">Agregar</Button>
        </Form>
        <BloqueColores colores={colores} setColores={setColores}></BloqueColores>
    </section>
    )
}

export default FormularioColores;