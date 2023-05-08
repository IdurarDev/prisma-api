import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup"
import { Form, Formik } from "formik"

import '../../css/login.css';

function Login() {
    const schema = Yup.object({
        Firstame: Yup.string().required(),
        Lastname: Yup.string().required(),
        Email: Yup.string().email().required(),
        Password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "The password is required: a uppercase letter and a number min and a special character").required()
    })

    return (
        <section className='main-container-form-login'>
            <div>
                <Formik
                    initialValues={{ Email: "", Password: "" }}
                    onSubmit={value => console.log(value)}
                    validationSchema={schema}
                >
                    {<>
                        <h2 className='login-title-h2'>Log in</h2>
                        <Form className='container-form-login'>
                            <div className='input-login-form'>
                                <label htmlFor="email">Email: </label>
                                <input type="email" name="email" required />
                            </div>
                            <div className='input-login-form'>
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" required />
                            </div>
                            <div className='button-login-form'>
                                <button type="submit">Submit</button>
                            </div>
                            <div className='subscribe-link'>
                                <Link to="/subscribe">Pas de compte ? Inscrivez vous !</Link>
                            </div>
                        </Form></>
                    }
                </Formik>
            </div>
        </section >
    )
}

export default Login