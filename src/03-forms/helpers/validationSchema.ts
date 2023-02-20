import * as Yup from 'yup';

export const validationSchema =()=>{
  const validation = Yup.object({
      firstName: Yup.string()
                  .min(2, "Debe tener al menos 2 Caracteres")
                  .max(15, "Debe de tener menos de 15 Caracteres")
                  .required("Requerido"),
      email: Yup.string()
              .email("El correo electrónico debe ser un correo electrónico válido")
              .required("Requerido"),
      password: Yup.string()
                  .required("Requerido")
                  .min(2, "Debe tener al menos 6 Caracteres") 
                  .matches(/\d+/,"Debe contener numeros")                         
                  .matches(/[a-z]+/, "Debe contener letras minusculas"),
      password2: Yup.string()
                  .oneOf( [Yup.ref('password')], "Las contraseñas no son iguales")
                  .required("Requerido")
    })

  return validation
}