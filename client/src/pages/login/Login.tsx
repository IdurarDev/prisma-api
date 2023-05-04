import React from 'react';
import * as Yup from "yup"
import { Form, Formik } from "formik"

function Login() {
    const schema = Yup.object({
        Email: Yup.string().email().required(),
        Password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "The password is required: a uppercase letter and a number min and a special character").required()
    })

    return (
        <section className='main-container-form'>
            <div>
                <h2>Log in</h2>
                <Formik
                    initialValues={{ Email: "", Password: "" }}
                    onSubmit={value => console.log(value)}
                    validationSchema={schema}
                >
                    {
                        <Form>
                            <div>
                                <label htmlFor="Email">Email: </label>
                                <input type="email" name="Email" />
                            </div>
                            <div>
                                <label htmlFor="Email">Password: </label>
                                <input type="password" name="Password" />
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </section >
    )
}

export default Login