import './SignUp.scss'
import { useState } from 'react'
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CTAButton from '../UI/CTAButton/CTAButton';
import { getData as getCountries } from 'country-list';
import ISO6391 from 'iso-639-1';
// import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const SignUp = () => {
    const [fieldErrors, setFieldErrors] = useState({})

    // Generate country options
    const countries = getCountries().map((country) => ({
        value: country.code,
        label: country.name,
    }));

    // Generate language options
    const languages = ISO6391.getAllNames().map((language) => ({
        value: ISO6391.getCode(language),
        label: language,
    }));

    const validateForm = (values) => {
        const errors = {}
        if (!values.firstName || values.firstName.length < 3) {
            errors.firstName = 'firstName must be at least 3 character';
        }

        if (!values.lastName || values.lastName.length < 3) {
            errors.lastName = 'last Name must be at least 3 character';
        }
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.country) {
            errors.country = 'Country of origin is required';
        }
        if (!values.language) {
            errors.language = 'Language selection is required';
        }

        if (!values.password || values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!values.confirmPassword || values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords must match';
        }
        // Update the fieldErrors state
        setFieldErrors(errors);

        console.log(values)

        return errors

    }

    // const navigate = useNavigate()



    return (
        <>
            <Formik
                initialValues={{
                    firstName: '', // Initial value for firstName
                    email: '', // Initial value for email
                    lastName: '', // Initial value for name
                    country: null,
                    language: null,
                    password: '', // Initial value for password
                    confirmPassword: '', // Initial value for confirm password
                }}
                validate={validateForm} // Use custom validation function
                onSubmit={async (values, { setSubmitting }) => {
                    const { firstName, email, lastName, password, country, language } = values;

                    try {
                        const signUpRes = await axios.post(`${SERVER_URL}/auth/signup`, {
                            email,
                            firstName,
                            lastName,
                            country: country.label,
                            language: language.label,
                            password,
                        });

                        if (signUpRes.status === 201) {
                            const loginRes = await axios.post(`${SERVER_URL}/auth/login`, { firstName, password });

                            if (loginRes.status === 200) {
                                // If the login is successful, store the returned token in localStorage
                                localStorage.setItem('authToken', loginRes.data.token)
                                // Then redirect to profile page
                                // navigate('/profile')
                                console.log('sucesss')
                            } else {
                                // navigate('/login')
                                console.log('not sucesss')
                            }
                        }
                    } catch (err) {
                        console.log("Error: ", err);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting, touched, setFieldValue }) => (
                    <Form>
                        <section className='signup'>
                            <h1 className='signup__header'> User Sign Up</h1>
                            {/* firstName Field */}

                            <section className='col__container'>
                                <section className='col-one'>

                                </section>
                                <section className='col-two'>
                                    <div className='signup__container'>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder='Enter your First Name'
                                            className={touched.firstName && fieldErrors.firstName ? 'signup__error-border' : 'signup__input'}
                                        /> {/* Input for firstName */}

                                    </div>
                                    <ErrorMessage name="firstName" component="div" className="error-message" />{/* Error message for firstName */}
                                    {/* Name Field */}
                                    <div className='signup__container'>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder='Enter Your Last Name'
                                            className={touched.lastName && fieldErrors.lastName ? 'signup__error-border' : 'signup__input'}
                                        /> {/* Input for lastName */}

                                    </div>
                                    <ErrorMessage name="lastName" component="div" className=" error-message" /> {/* Error message for name */}
                                    {/* Email Field */}
                                    <div className='signup__container'>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder='Enter your Email'
                                            className={touched.email && fieldErrors.email ? 'signup__error-border' : 'signup__input'}
                                        /> {/* Input for email */}

                                    </div>
                                    <ErrorMessage name="email" component="div" className="error-message" /> {/* Error message for email */}

                                    {/* Country of Origin Field (react-select) */}
                                    <div className="signup__container">
                                        <Select
                                            options={countries}
                                            placeholder="Select your country of Intrest"
                                            onChange={(option) => setFieldValue('country', option)}
                                            classNamePrefix="react-select"
                                            className={touched.country && fieldErrors.country ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="country" component="div" className="error-message" />
                                    </div>

                                    {/* Language Field (react-select) */}
                                    <div className="signup__container">
                                        <Select
                                            options={languages}
                                            placeholder="Select your language"
                                            onChange={(option) => setFieldValue('language', option)}
                                            classNamePrefix="react-select"
                                            className={touched.country && fieldErrors.country ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="language" component="div" className="error-message" />
                                    </div>

                                    {/* Password Field */}
                                    <div className='signup__container'>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder='Enter Password'
                                            className={touched.password && fieldErrors.password ? 'signup__error-border' : 'signup__input'}
                                        /> {/* Input for Password */}

                                    </div>
                                    <ErrorMessage name="password" component="div" className="error-message" /> {/* Error message for Password */}
                                    {/* Confirm password Field */}
                                    <div className='signup__container'>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            placeholder='Confirm Password'
                                            className={touched.confirmPassword && fieldErrors.confirmPassword ? 'signup__error-border' : 'signup__input'}
                                        /> {/* Input for Confirm password */}

                                    </div>
                                    <ErrorMessage name="confirmPassword" component="div" className="error-message" /> {/* Error message for Confirm password */}
                                    <div className='signup__container'>
                                        <CTAButton className="register" text="Sign Up" type="register"  />
                                    </div>
                                    <div className='signup__container'>
                                        <p className='login__paragraph'>Already have an Account? <br /> Login in <span className=''>here </span></p>
                                    </div>

                                </section>
                            </section>
                        </section>

                    </Form>
                )}

            </Formik >

        </>
    )
}

export default SignUp