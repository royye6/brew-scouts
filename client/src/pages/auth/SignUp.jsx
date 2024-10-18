import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import SignUpForm from "../../components/auth/SignUpForm";

export const SignUp = () => {
    return (
        <>
            <AuthCard>
                <SignUpForm />
            </AuthCard>
        </>
    );
};

export default SignUp;
