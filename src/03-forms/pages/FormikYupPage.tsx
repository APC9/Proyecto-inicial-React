import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const { 
      handleSubmit, 
      getFieldProps, //ejemplo en el formulario
      touched, 
      errors 
    } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max(15, 'Debe de tener 15 Caracteres o menos')
                    .required( 'Requerido'),
      lastName: Yup.string()
                    .max(15, 'Debe de tener 15 Caracteres o menos')
                    .required( 'Requerido'),
      email: Yup.string()
                    .email('El correo electrónico debe ser un correo electrónico válido')
                    .required( 'Requerido'), 
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>

        <label htmlFor='firstName'>First Name</label>
        <input 
          type='text' 
          placeholder='First Name'
          {...getFieldProps('firstName')} //esta es la forma abreviada de lo de abajo
              //name='email'
              //value={values.email}
              //onBlur={ handleBlur}
              //onChange={ handleChange }
          />
        { touched.firstName && errors.firstName && <span>{errors.firstName }</span>}
        
        <label htmlFor='lastName'>Last Name</label>
        <input 
          type='text'
          placeholder='Last Name' 
          { ...getFieldProps('lastName')}  //esta es la forma abreviada de lo de abajo
              //name='email'
              //value={values.email}
              //onBlur={ handleBlur}
              //onChange={ handleChange }
          />
        { touched.lastName &&errors.lastName && <span>{errors.lastName }</span>}
        
        <label htmlFor='email'>Email Addres</label>
        <input 
          type='email' 
          placeholder='Email' 
          { ...getFieldProps('email')} //esta es la forma abreviada de lo de abajo
              //name='email'
              //value={values.email}
              //onBlur={ handleBlur}
              //onChange={ handleChange }
          />
        { touched.email &&errors.email && <span>{errors.email }</span>}

        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}
