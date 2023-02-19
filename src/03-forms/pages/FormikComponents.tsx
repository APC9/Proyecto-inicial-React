import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder='First Name'/>
            <ErrorMessage component='span' name="firstName" />
            
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder='Last Name'/>
            <ErrorMessage component='span' name="lastName" />
            
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder='Email'/>
            <ErrorMessage component='span' name="email" />
            
            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select" >
                <option value=''>Seleccione una opcion</option>
                <option value='developer'>Desarrollador</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>IT Senior</option>
                <option value='it-jr'>IT Junior</option>
            </Field>
            <ErrorMessage component='span' name="jobType" />
            
            
            <label>
              Terminos y condiciones
              <Field name="terms" type="checkbox" />  
            </label>
            <ErrorMessage component='span' name="terms" />

            <button type="submit">Submit</button>

          </Form>
        )}

      </Formik>
    </div>
  );
}
