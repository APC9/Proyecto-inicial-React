import { useFormik } from 'formik';
import { validate } from '../helpers/validateFormik'
import '../styles/styles.css';

export interface formValues{
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const { handleChange, handleSubmit, handleBlur, touched, values, errors }= useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>

        <label htmlFor='firstName'>First Name</label>
        <input 
          type='text' 
          name='firstName'
          placeholder='First Name'
          value={values.firstName} 
          onBlur={ handleBlur}
          onChange={ handleChange }/>
        { touched.firstName && errors.firstName && <span>{errors.firstName }</span>}
        
        <label htmlFor='lastName'>Last Name</label>
        <input 
          type='text'
          name='lastName'
          placeholder='Last Name' 
          value={values.lastName} 
          onBlur={ handleBlur}
          onChange={ handleChange } />
        { touched.lastName &&errors.lastName && <span>{errors.lastName }</span>}
        
        <label htmlFor='email'>Email Addres</label>
        <input 
          type='email' 
          placeholder='Email' 
          name='email'
          value={values.email}
          onBlur={ handleBlur}
          onChange={ handleChange } />
        { touched.email &&errors.email && <span>{errors.email }</span>}

        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}
