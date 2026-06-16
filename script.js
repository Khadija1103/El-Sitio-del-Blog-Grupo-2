const formulario = document.querySelector("#formulario");
const errorNombre = document.querySelector("#error-nombre")
const errorCorreo = document.querySelector("#error-correo")
const errorMensaje = document.querySelector("#error-mensaje")


const enviarMensaje = document.querySelector("#enviar");

const mensajes = []

enviarMensaje.addEventListener("click", (e) => {
    e.preventDefault();


    const data = new FormData(formulario);

    const nombre = data.get("nombre");
    const correo = data.get("correo");
    const mensaje = data.get("mensaje");



    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio"
    } else {
        errorNombre.textContent = ""
    }
    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio"
    } else {
        errorCorreo.textContent = ""
    }
    if (mensaje === "") {
        errorMensaje.textContent = "El mensaje es obligatorio"
    } else {
        
    }
    if (nombre === "" || correo === "" || mensaje === "") return

    const mensajeObjeto = Object.fromEntries(data)

    localStorage.setItem("formulario", JSON.stringify(mensajeObjeto));

    errorNombre.textContent = ""
    errorCorreo.textContent = ""
    errorMensaje.textContent = ""

    formulario.reset();


})