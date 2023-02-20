import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import { 
    DynamicForm,
    FormikBasicPage, 
    FormikComponents,
    FormikComponentsAbstractation, 
    FormikYupPage,
    RegisterFormikPage, 
    RegisterPages, 
} from "../03-forms/pages"

import logo from'../../public/react.svg'


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={ logo } alt='logo-react' />
                    
                    <ul>
                        <li>
                            <NavLink to ='/register' className={ ({ isActive })=> isActive? 'nav-active': '' } >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/registerformikpage' className={ ({ isActive })=> isActive? 'nav-active': '' } >Register Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/formikBasic' className={ ({ isActive })=> isActive? 'nav-active': '' } >Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/FormikYup' className={ ({ isActive })=> isActive? 'nav-active': '' } >Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/FormikComponents' className={ ({ isActive })=> isActive? 'nav-active': '' } >Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/FormikComponentsAbstractation' className={ ({ isActive })=> isActive? 'nav-active': '' } >Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to ='/DynamicForm' className={ ({ isActive })=> isActive? 'nav-active': '' } >Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register'  element={ <RegisterPages/> } />
                    <Route path='/registerformikpage'  element={ <RegisterFormikPage/> } />
                    <Route path='/formikBasic'  element={ <FormikBasicPage /> } />
                    <Route path='/FormikYup'  element={ <FormikYupPage/>} />
                    <Route path='/FormikComponents'  element={ <FormikComponents/>} />
                    <Route path='/FormikComponentsAbstractation'  element={ <FormikComponentsAbstractation/>} />
                    <Route path='/DynamicForm'  element={ <DynamicForm />} />
                
                    <Route path='/*'  element={ <Navigate to='/home' replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
