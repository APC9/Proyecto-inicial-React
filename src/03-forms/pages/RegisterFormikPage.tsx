import { Formik, Form } from 'formik';

import { validationSchema } from '../helpers/validationSchema';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1> Register Formik Pages</h1>

            <Formik 
                initialValues={{
                firstName: "",
                email: "",
                password:"",
                password2:"",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema = {validationSchema}
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='First Name' 
                            />

                            <MyTextInput 
                                label='Email' 
                                name='email' 
                                placeholder='your_email@email.com' 
                            />
                            
                            <MyTextInput 
                                label='password' 
                                name='password' 
                                type='password'
                                placeholder='Password' 
                            />
                            
                            <MyTextInput 
                                label='password2' 
                                name='password2' 
                                type='password'
                                placeholder='Repeat Password' 
                            />

                            <button type='submit' >Register</button>
                            <button onClick={handleReset} >Reset</button>

                        </Form>
                    )
                }
            
            </Formik>

        </div>
    )
}
