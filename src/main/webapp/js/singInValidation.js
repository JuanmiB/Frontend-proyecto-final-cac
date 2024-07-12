document.addEventListener('DOMContentLoaded', ()=>{
 initForm()
})

const initForm = () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        if(!validateForm()){
            console.log('Form is not valid')
            return
        }
        console.log('Form is valid')
    });
}

const validateForm = () => {
    // validar campo de mail con funcion de validacion
  if(!validateEmail()){
        console.log('Email is not valid')
      return false
    }
    // validar campo de password con funcion de validacion
  if(!validatePassword()){
      console.log('Password is not valid')
      return false
    }
    // si ambos campos son validos, retornar true
    // si alguno de los campos no es valido, retornar false
    return true

}

const validateEmail = () => {
    // Obtener el valor del campo email
    const email = document.getElementById('email')
  
    // Validar que el campo no este vacío
    if (!email.value) {
       showError(email, 'Email is required')
        return false
    }
    
    // Validar que el campo tenga un formato de email válido
    //Regex para validar email
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailPattern.test(email.value)) {
     showError(email, 'Email is not valid')
        return false
    }
    showSuccess(email)
    
    // Si el campo no está vacío y tiene formato de email, retornar true
    return true
}


const validatePassword = () => {
    // obtener el valor del campo password
  const password = document.getElementById('password')
    // validar que el campo no este vacio
    if (password.value === '') {
        showError(password, 'Password is required')
        return false;
    }
    // validar que el campo tenga al menos 8 caracteres
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters')
        return false
    }
    // si el campo no esta vacio y tiene al menos 8 caracteres, retornar true
    showSuccess(password)

    return true
}


  const showError = (input, message) => {
    // obtener el div que contiene el input
    const formControl = input
    console.log(formControl)
    // agregar la clase de error al div
    formControl.classList.add ('error')
    // obtener el mensaje de error
    const error = formControl.parentElement.querySelector('div')
    error.classList.add('serror')
    error.innerText = message;
  }

    const showSuccess = (input) => {
        const formControl = input
        console.log(formControl)
        formControl.classList.remove('error')
        const error = formControl.parentElement.querySelector('div')
        error.classList.remove('serror')
        error.innerText = ''

    }

