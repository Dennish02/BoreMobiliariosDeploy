import {useEffect, useState} from 'react'



export default function useValidacion(stateInicial,validar, fn) {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(()=>{
    if(submitForm){
        const noErrores = Object.keys(errores).length === 0;
        if(noErrores){
            fn();
        }
        guardarSubmitForm(false);
    }
  },[errores])
  
  //funcion que se ejecuta cuando el usuario escribe
  const handleSelected = e=>{
    guardarValores({
      ...valores,
      categoria: e.target.value
    })
  }
  const handleChange = e=>{
    guardarValores({
        ...valores,
        [e.target.name] : e.target.value
    })
  }

  const handleBlur = ()=>{
    const erroreValidacion = validar(valores);
    guardarErrores(erroreValidacion);
  }

  //funcion submit
  const handleSubmit = e =>{
    e.preventDefault();
    const erroreValidacion = validar(valores);
    guardarErrores(erroreValidacion);
    guardarSubmitForm(true);

  }
    return {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur,
        handleSelected
    }
}
