import { formValues } from "../pages/FormikBasicPage";
import { FormikErrors } from 'formik/dist/types';

export const validate = ( {firstName, lastName, email }: formValues )=>{

  const errors: FormikErrors<formValues> ={};

  if (!firstName) {
    errors.firstName = 'Required';
  } else if(firstName.trim().length >= 15 ){
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!lastName) {
    errors.lastName = 'Required';
  } else if(lastName.trim().length >= 10 ){
    errors.lastName = 'Must be 10 characters or less';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}