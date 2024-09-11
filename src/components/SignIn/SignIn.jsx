import './SignIn.scss';
import { useState } from 'react';
import CTAButton from '../UI/CTAButton/CTAButton';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient'; // Import Supabase client

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [fieldErrors, setFieldErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    const validateForm = () => {
        const errors = {};

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        setFieldErrors(errors);

        // Return true if no errors
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const { username, password } = formData;

                // Log in using Supabase authentication
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: username, // Supabase requires an email for login
                    password,
                });

                if (error) {
                    console.error('Login failed:', error.message);
                    setLoginError('Login failed. Please check your credentials and try again.');
                } else {
                    console.log('Login successful:', data);
                    // You can store the token or redirect the user to the dashboard
                    localStorage.setItem('authToken', data.session.access_token);
                    // Redirect or navigate to a protected page like Dashboard
                    // Redirect to dashboard
                    navigate('/dashboard');
                }
            } catch (err) {
                console.error('Login error:', err);
                setLoginError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <section className="login">
                <h1 className="login__header">User Login</h1>
                <div className="col__container">
                    <section className="col-one"></section>
                    <section className="col-one">
                        <form onSubmit={handleLogin}>
                            <div className="login__container">
                                <label htmlFor="login_username" className="login__box">
                                    <input
                                        className="login__input"
                                        type="text"
                                        id="login_username"
                                        name="username"
                                        placeholder="Username (Email)"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    {fieldErrors.username && (
                                        <p className="error-message">{fieldErrors.username}</p>
                                    )}
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
                                    {fieldErrors.password && (
                                        <p className="error-message">{fieldErrors.password}</p>
                                    )}
                                </label>
                            </div>
                            {loginError && <p className="error-message">{loginError}</p>}
                            <div className="login__container">
                                <CTAButton className="signin" text="Sign In" type="signin" />
                            </div>
                        </form>
                        <section>
                            <p className="login__paragraph">
                                No account? <br /> Sign Up{' '}
                                <Link to="/signup">
                                    <span className="login-here">here </span>
                                </Link>
                            </p>
                        </section>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Login;
