import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import SignInForm from "../../components/auth/SignInForm";

export const SignIn = () => {
    return (
        <>
            <AuthCard>
                <SignInForm />
            </AuthCard>
        </>
    );
};

export default SignIn;
