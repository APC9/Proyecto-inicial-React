import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';


export const FormikComponentsAbstractation = () => {

  return (
    <div>
      <h1>Formik Components Abstractation Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms:false,
          jobType: ''
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, "Debe de tener 15 Caracteres o menos")
                        .required("Requerido"),
          lastName: Yup.string()
                        .max(15, "Debe de tener 15 Caracteres o menos")
                        .required("Requerido"),
          email: Yup.string()
                    .email("El correo electrónico debe ser un correo electrónico válido")
                    .required("Requerido"),
          terms: Yup.boolean()
                    .oneOf([true], "Debe de aceptar los terminos y condiciones"),
          jobType: Yup.string()
                      .required("Requerido")
                      .notOneOf(['it-jr'], 'Esta opcion no es permitida')
        })}
      >
        {(formik) => (
          <Form>

            <MyTextInput 
              label='First Name' 
              name='firstName'
              placeholder='First Name' 
              />

            <MyTextInput 
              label='Last Name' 
              name='lastName' 
              placeholder='Last Name' 
              />

            <MyTextInput 
              label='Email' 
              name='email' 
              placeholder='Email' 
              />

            <MySelect label="job Type" name="jobType" >
                <option value=''>Seleccione una opcion</option>
                <option value='developer'>Desarrollador</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>IT Senior</option>
                <option value='it-jr'>IT Junior</option>
            </MySelect>
            
            <MyCheckbox label='Terminos y condiciones' name='terms' />

            <button type="submit">Submit</button>

          </Form>
        )}

      </Formik>
    </div>
  );
}
