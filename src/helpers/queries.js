const URLColor = import.meta.env.VITE_API_COLOR;

export const consultarListaColores = async () =>{
    try{
        const respuesta = await fetch(URLColor);
        const listaColores = await respuesta.json()
        return listaColores;
    }catch(error){
        console.log(error)
        return null 
    }
}

export const consultarColor = async (id) =>{
    try{
        const respuesta = await fetch(URLColor+`/${id}`);
        const color = await respuesta.json()
        return color;
    }catch(error){
        console.log(error)
        return null 
    }
}

export const consultarCrearColor = async (color) =>{
    try{
        const respuesta = await fetch(URLColor, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta
    }catch(error){
        console.log(error)
        return null 
    }
}

export const consultarBorrarColor = async (id) =>{
    try{
        const respuesta = await fetch(`${URLColor}/${id}`, {
            method: "DELETE"
        });
        return respuesta
    }catch(error){
        console.log(error)
        return null 
    }
}