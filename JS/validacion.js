const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=>verificarCampo(campo))
    campo.addEventListener("invalid", evento=>evento.preventDefault())
});

function verificarCampo (campo){
    let mensaje=""

    tiposError.forEach(error=>{
        if(campo.validity[error]){
            mensaje=mensajes[campo.name][error]
            console.log(mensaje);
        }
    })

    const mensajeError = campo.parentNode.querySelector(".mensaje-error")
    const validarInputCheck = campo.checkValidity()
    if(!validarInputCheck){
        mensajeError.textContent= mensaje
    }else{
        mensajeError.textContent=""
    }
    // console.log("cambio",campo.name);
    
}
  
const tiposError = [
    "valueMissing",
    "typeMissmatch",
    "patternMissmatch",
    "customError",
  ];
const mensajes = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un asunto en el mensaje.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un mensaje para Juan Carlos.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    
  };
 

