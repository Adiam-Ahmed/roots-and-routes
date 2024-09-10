import './SignIn.scss'
import { useState } from 'react';
import CTAButton from '../UI/CTAButton/CTAButton';
// import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [fieldErrors, setFieldErrors] = useState({})
    // const navigate = useNavigate()

    const validateForm = () => {
        const errors = {}

        if (!formData.username.trim()) {
            errors.username = "username is required"
        }
        if (!formData.password.trim()) {
            errors.password = "password is required"
        }
        setFieldErrors(errors)

        // Return true if no errors
        return Object.keys(errors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            try {
                const loginRes = await axios.post(`${SERVER_URL}/auth/login`, {
                    username: formData.username,
                    password: formData.password,
                }, {
                    withCredentials: true  // Ensure credentials are sent if needed
                });

                if (loginRes.status === 200) {
                    localStorage.setItem('authToken', loginRes.data.token);
                    // handleLoginHeader();
                    // navigate('/profile');
                }
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setFieldErrors(prevErrors => ({
                        ...prevErrors,
                        general: "User not found",
                    }));
                } else {
                    setFieldErrors(prevErrors => ({
                        ...prevErrors,
                        general: "Login failed. Please try again.",
                    }));
                }
                console.error("Login failed:", err);
            }
        }
    }

    return (
        <>
            <section className="login">
                <h1 className="login__header">User Login</h1>
                <div className="col__container">
                    <section className='col-one'>
                    </section>
                    <section className='col-one'>
                        <form onSubmit={handleLogin}>
                            <div className="login__container">
                                <label htmlFor="login_username" className="login__box">
                                    <input
                                        className="login__input"
                                        type="text"
                                        id="login_username"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    {fieldErrors.username && <p className="error-message">{fieldErrors.username}</p>}
                                </label>

                            </div>
                            <div className="login__container">
                                <label htmlFor="login_password" className="login__box">
                                    <input
                                        className="login__input"
                                        type="password"
                                        id="login_password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {fieldErrors.password && <p className="error-message">{fieldErrors.password}</p>}
                                </label>
                            </div>
                            <div className="login__container">
                                <CTAButton className="signin" text="Sign Up" type="signin"  />
                            </div>
                        </form>
                        <section className=''>
                            <p className='login__paragraph'>No account? <br />  Sign Up <span className=''></span> </p>
                        </section>
                    </section>
                </div>
            </section>
        </>



    )
}

export default Login;
