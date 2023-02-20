import * as Yup from 'yup';
import formJson from '../data/custom-form.json';

export const useValidationDynamicSchema =()=>{

  const initialValues: {[ key:string ]:any } ={};
  const requiredFieds: {[ key:string ]:any } ={};

  for (const input of formJson){ // se recorre el json del  formulario
    initialValues[input.name] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations){ //se recorre la propiedad validacion 
      if(rule.type === 'required'){
        schema = schema.required('Este campo es requerido');
      }

      if(rule.type === 'minLength'){
        schema = schema.min((rule as any).value || 2, `Minimo ${(rule as any).value || 2 } caracteres`);
      }

      if(rule.type === 'email'){
        schema = schema.required('Este campo es requerido')
                        .email("El correo electrónico debe ser un correo electrónico válido")
      }

      if(rule.type === 'password'){
        schema = schema.required('Este campo es requerido')
                .min(6, "Debe tener al menos 6 Caracteres") 
                .matches(/\d+/,"Debe contener numeros")                         
                .matches(/[a-z]+/, "Debe contener letras minusculas")
      }
      
      if(rule.type === 'password2'){
        schema = schema.required('Este campo es requerido')
                        .oneOf( [Yup.ref('password')], "Las contraseñas no son iguales")
      }

    }

    requiredFieds[input.name] = schema;

  }

  const validationSchema = Yup.object({...requiredFieds});

  return {
    initialValues,
    validationSchema
  }
} 