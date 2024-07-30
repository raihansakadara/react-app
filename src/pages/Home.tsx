import React from 'react'
import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/Auth";
import {supabase} from "../SupabaseClient.ts";

const Home = () => {
    const navigate = useNavigate()
    const user = useAuth()
    const handleSignout = async () => {
        try {
            await supabase.auth.signOut();
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }

    };

    return (
        <div>
            Welcome {user.user.email}
            <Button label="Sign Out" onCLick={() => handleSignout()}/>
        </div>
    )
}

export default Home