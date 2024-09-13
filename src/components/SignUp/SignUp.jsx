import './SignUp.scss'
import { useState } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CTAButton from '../UI/CTAButton/CTAButton';
import { getData as getCountries } from 'country-list';
import ISO6391 from 'iso-639-1';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { Modal, Button } from '@mui/material'; // Import Modal and Button

const SignUp = () => {
    const [fieldErrors, setFieldErrors] = useState({});
    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [modalMessage, setModalMessage] = useState(""); // State to control modal message

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
        const errors = {};
        if (!values.firstName || values.firstName.length < 3) {
            errors.firstName = 'First name must be at least 3 characters';
        }
        if (!values.lastName || values.lastName.length < 3) {
            errors.lastName = 'Last name must be at least 3 characters';
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
        if (!values.state) {
            errors.state = 'State is required';
        }
        if (!values.city) {
            errors.city = 'City is required';
        }
        if (!values.password || values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!values.confirmPassword || values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords must match';
        }
        setFieldErrors(errors);
        return errors;
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <Header/>
            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    lastName: '',
                    country: null,
                    countryTwo: null,
                    language: null,
                    state: '',
                    city: '',
                    postalCode: '',
                    password: '',
                    confirmPassword: '',
                }}
                validate={validateForm}
                onSubmit={async (values, { setSubmitting }) => {
                    const { email, password, firstName, lastName, country, language, countryTwo, postalCode, city, state } = values;

                    try {
                        const { data, error } = await supabase.auth.signUp({
                            email,
                            password,
                            options: {
                                data: {
                                    firstName,
                                    lastName,
                                    country: country.label,
                                    language: language.label,
                                    countryTwo: countryTwo.label, 
                                    postalCode, 
                                    city, 
                                    state
                                },
                            },
                        });

                        if (error) {
                            setModalMessage('Error signing up: ' + error.message);
                        } else {
                            setModalMessage('User signed up successfully! An email has been sent to verify your account');
                        }
                        setModalOpen(true); // Open the modal
                    } catch (err) {
                        setModalMessage("Error: " + err);
                        setModalOpen(true); // Open the modal on error
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting, touched, setFieldValue }) => (
                    <Form>
                        <section className='signup'>
                            <h1 className='signup__header'>User Sign Up</h1>
                            <section className='col__container'>
                                <section className='col-one'></section>
                                <section className='col-two'>
                                    <div className='signup__container'>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder='Enter your First Name'
                                            className={touched.firstName && fieldErrors.firstName ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                    <div className='signup__container'>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder='Enter Your Last Name'
                                            className={touched.lastName && fieldErrors.lastName ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                    <div className='signup__container'>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder='Enter your Email'
                                            className={touched.email && fieldErrors.email ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                    <div className="signup__container">
                                        <Select
                                            options={countries}
                                            placeholder="Select your country of Interest"
                                            onChange={(option) => setFieldValue('country', option)}
                                            classNamePrefix="react-select"
                                            className={touched.country && fieldErrors.country ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="country" component="div" className="error-message" />
                                    </div>
                                    <div className="signup__container">
                                        <Select
                                            options={countries}
                                            placeholder="Select another country of Interest"
                                            onChange={(option) => setFieldValue('countryTwo', option)}
                                            classNamePrefix="react-select"
                                            className={touched.country && fieldErrors.country ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <div className="signup__container">
                                        <Select
                                            options={languages}
                                            placeholder="Select your language"
                                            onChange={(option) => setFieldValue('language', option)}
                                            classNamePrefix="react-select"
                                            className={touched.language && fieldErrors.language ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="language" component="div" className="error-message" />
                                    </div>
                                    <div className="signup__container">
                                        <Field
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            className={touched.state && fieldErrors.state ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="state" component="div" className="error-message" />
                                    </div>
                                    <div className="signup__container">
                                        <Field
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            className={touched.city && fieldErrors.city ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="city" component="div" className="error-message" />
                                    </div>
                                    <div className="signup__container">
                                        <Field
                                            type="text"
                                            name="postalCode"
                                            placeholder="Three first digit of your postal Code"
                                            className={touched.city && fieldErrors.city ? 'signup__error-border' : 'signup__input'}
                                        />
                                        <ErrorMessage name="postalCode" component="div" className="error-message" />
                                    </div>
                                    <div className='signup__container'>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder='Enter Password'
                                            className={touched.password && fieldErrors.password ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                    <div className='signup__container'>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            placeholder='Confirm Password'
                                            className={touched.confirmPassword && fieldErrors.confirmPassword ? 'signup__error-border' : 'signup__input'}
                                        />
                                    </div>
                                    <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                                    <div className='signup__container'>
                                        <CTAButton className="register" text="Sign Up" type="register" />
                                    </div>
                                    <div className='signup__container'>
                                        <p className='signin__paragraph'>Already have an Account? <br /> Login <Link to='/login'><span className='login-here'>here</span></Link></p>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </Form>
                )}
            </Formik>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h2 id="modal-title">Sign Up Status</h2>
                    <p id="modal-description">{modalMessage}</p>
                    <Button onClick={handleModalClose} color="primary">Close</Button>
                </div>
            </Modal>
            <Footer />
        </>
    )
}

export default SignUp;
