import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import { 
    RegisterPages, 
    FormikBasicPage, 
    FormikYupPage,
    FormikComponents,
    FormikComponentsAbstractation, 
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
                            <NavLink to ='/users' className={ ({ isActive })=> isActive? 'nav-active': '' } >Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register'  element={ <RegisterPages/> } />
                    <Route path='/formikBasic'  element={ <FormikBasicPage /> } />
                    <Route path='/FormikYup'  element={ <FormikYupPage/>} />
                    <Route path='/FormikComponents'  element={ <FormikComponents/>} />
                    <Route path='/FormikComponentsAbstractation'  element={ <FormikComponentsAbstractation/>} />
                    <Route path='/home'  element={ <h1>Home page</h1> } />
                
                    <Route path='/*'  element={ <Navigate to='/home' replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
