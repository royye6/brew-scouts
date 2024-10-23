import React, { useState, useEffect } from "react";
import * as z from "zod";
import useStore from "../../store/index.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/auth/Card";
import Input from "../../components/auth/Input";
import { Button } from "../../components/auth/Button";
import { BiLoader } from "react-icons/bi";
import LoginCard from "../../components/auth/LoginCard";
import api from "../../utils/apiCall";
import { toast } from "sonner";
import logo from "../../assets/images/logo/brewscouts_logo.png";

const SignUpSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .min(3, "Name is required"),
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(3, "Password is required"),
});

export const SignUp = () => {
    const { user } = useStore((state) => state);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SignUpSchema),
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState();

    useEffect(() => {
        user && navigate("/");
    }, [user]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            // console.log(data);

            const { data: res } = await api.post("/auth/sign-up", data);

            if (res?.user) {
                toast.success(
                    "Account created successfully. You can now login."
                );

                setTimeout(() => {
                    navigate("/sign-in");
                }, 1500);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-white">
            <LoginCard />

            <div className="py-10 w-2/6 bg-white flex items-center justify-center">
                <Card className="w-[450px] mx-auto overflow-hidden">
                    <div className="p-6 md:-8">
                        <div className="flex items-center justify-center py-10 mb-8 rounded">
                            <img src={logo} alt="" width="200" />
                        </div>

                        <CardHeader className="py-0">
                            <CardTitle className="mb-8 text-center">
                                Create Account
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="p-0">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <div className="mb-8 space-y-6">
                                    <Input
                                        disabled={loading}
                                        id="username"
                                        label="Username"
                                        name="username"
                                        type="text"
                                        placeholder="John Smith"
                                        error={errors.username?.message}
                                        {...register("username")}
                                        className="text-sm border"
                                    />

                                    <Input
                                        disabled={loading}
                                        id="email"
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="jsmith@example.com"
                                        error={errors.email?.message}
                                        {...register("email")}
                                        className="text-sm border"
                                    />

                                    <Input
                                        disabled={loading}
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="John Smith"
                                        error={errors.password?.message}
                                        {...register("password")}
                                        className="text-sm border"
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-700 flex items-center justify-center"
                                    >
                                        {loading ? (
                                            <BiLoader className="text-2xl font-semibold text-white animate-spin" />
                                        ) : (
                                            "Create an account"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </div>

                    <CardFooter className="justify-center gap-2">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                        </p>
                        <Link
                            to="/sign-in"
                            className="text-sm font-semibold text-green-800 hover:underline"
                        >
                            Sign In
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;
