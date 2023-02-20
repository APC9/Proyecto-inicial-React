import {Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { useValidationDynamicSchema } from '../hooks/useValidationDynamicSchema';



export const DynamicForm = () => {

  const { initialValues, validationSchema } = useValidationDynamicSchema()

  return (
    <div>
      <h1> Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit= {(values)=> console.log(values)}
      >
        {
          (formik)=>(
            <Form noValidate>
              
              { 
                formJson.map(({name, placeholder, type, label, options }) =>{

                  if( type === 'text' || type === 'email' || type === 'password'){
                    
                    return <MyTextInput 
                              key={name} 
                              type={(type as any)} 
                              label={label} 
                              name={name}
                              placeholder={placeholder}
                            />
                  }else if( type === 'select'){
                    return (
                      <MySelect
                        key={name} 
                        label={label} 
                        name={name}                     
                      >
                        <option value=''>Seleccione una opcion</option>
                        { options?.map(({id, label}) => (
                          
                          <option
                            key={id} 
                            value={id}>{label}</option> 
                        ))}

                      </MySelect>
                    )
                  }


                  throw new Error(`El tipo: ${type} no es valido`)
                })

                
              }
              <button type="submit">Submit</button>
  
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
