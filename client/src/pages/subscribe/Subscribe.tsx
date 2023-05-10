import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik } from "formik"
import * as Yup from "yup"


import '../../css/subscribe.css';

function Subscribe() {
    const schema = Yup.object({
        Firstame: Yup.string().required(),
        Lastname: Yup.string().required(),
        Email: Yup.string().email().required(),
        Password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "The password is required: a uppercase letter and a number min and a special character").required(),
        ConfirmPassword: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "The password is required: a uppercase letter and a number min and a special character").required()
    })

    return (
        <Fragment>
            <section className="main-container-form-subscribe">
                <Formik
                    initialValues={
                        {
                            Firstname: "",
                            Lastname: "",
                            Email: "",
                            Password: ""
                        }
                    }
                    onSubmit={value => console.log(value)}
                    validationSchema={schema}
                >
                    {<>
                        <h2 className='subscribe-title-h2'>Subscrire</h2>
                        <Form className='container-form-subscribe'>
                            <div className='input-login-form'>
                                <label htmlFor="firstname">Firstame: </label>
                                <input type="firstname" name="firstname" required />
                            </div>
                            <div className='input-login-form'>
                                <label htmlFor="lastname">Lastname: </label>
                                <input type="lastname" name="lastname" required />
                            </div>
                            <div className='input-login-form'>
                                <label htmlFor="email">Email: </label>
                                <input type="email" name="email" required />
                            </div>
                            <div className='input-login-form'>
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" required />
                            </div>
                            <div className='input-login-form'>
                                <label htmlFor="password">Confirm password: </label>
                                <input type="password" name="password" required />
                            </div>
                            <div className='button-login-form'>
                                <button type="submit">Submit</button>
                            </div>
                        </Form></>
                    }
                </Formik>
                <div className="back-to-login">
                    <Link to="/login">Return to login page</Link>
                </div>
            </section>
        </Fragment>
    )
}

export default Subscribe
