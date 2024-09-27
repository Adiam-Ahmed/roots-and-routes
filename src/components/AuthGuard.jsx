import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient.js';

const AuthGuard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setAuthenticated(true);
                navigate('/dashboard');
            } else {
                setAuthenticated(false);
                navigate('/login');
            }
            setLoading(false);
        };

        checkSession();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? children : null;
};

export default AuthGuard;
