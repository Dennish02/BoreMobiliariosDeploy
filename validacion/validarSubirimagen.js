export default function validarSubirimagen(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    // validar trabajo
    if(!valores.categoria){
        errores.categoria ="Debe seleccionar una categoria"
    }

    return errores;
}