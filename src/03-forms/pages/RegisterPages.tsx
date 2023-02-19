import {  FocusEvent, FormEvent} from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface initialState{
    name: string,
    email: string,
    password: string,
    password2: string,
}


const user ={
    name: '',
    email: '',
    password: '',
    password2: '',
}

export const RegisterPages = () => {

    const { 
        formData, 
        name, 
        email, 
        password,
        password2,
        onChange,
        resetForm,
        isValidEmail}=useForm<initialState>(user)

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( Object.entries(formData).map(([key, value]) => value === '' )
            .filter( element => element === true).length !== 0 ) return;

        if((formData.password !== formData.password2))return;
        if(formData.password.length < 6)return;

        console.log({...formData});
    }


    return (
        <div>
            <h1> Register Pages</h1>

            <form onSubmit={onSubmit} >
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={` ${name.trim().length <=0 && 'has-error'}   `}
                />
                { name.trim().length > 0 && name.trim().length < 1 && <span>Este campo es necesario</span>}

                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                {  !isValidEmail(email) && <span>Este campo es necesario</span>}

                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    className={` ${ password.trim().length <=0 && 'has-error'}   `}
                />
                { password.trim().length <=0 && <span>Este campo es necesario</span>}
                { password.trim().length < 6 && password.trim().length > 0 && 
                    <span>La contraseña tiene que tener 6 letras</span>
                }

                <input
                    type='password'
                    placeholder='Repeat Password'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    className={` ${password2.trim().length <=0 && 'has-error'}   `}
                />
                { password2.trim().length <=0 && <span>Este campo es necesario</span>}
                { password !== password2 && 
                    <span>Password y Password2 son incorrectos</span>
                }


                <button type='submit' >Register</button>
                <button onClick={resetForm} >Reset</button>
            </form>
        </div>
    )
}
