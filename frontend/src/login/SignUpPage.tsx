import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useSignUp from "./useSignUp";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState<string>();
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState<string>();
  const [EmailErrorMsg, setEmailErrorMsg] = useState<string>();
  const [emailEmpty, setEmailEmpy] = useState<boolean>(true)
  const [UsernameErrorMsg, setUsernameErrorMsg] = useState<string>();
  const loginSchema = z.object({
    username: z.string().nonempty("Username is required"),
    password: z.string().nonempty("Password is required"),
  });

  const signup = useSignUp();
  const schema = z.object({
    username: z.string().min(3, { message: "Användarnamnet måste vara minst 3 bokstäver" }),
    email: z.string().email({ message: "Ange en giltig mailaddress" }),
    password: z.string().min(3, { message: "Lösenordet måste vara minst 3 bokstäver" }),
  });

  type FormData = z.infer<typeof schema>;
  const {register, handleSubmit, formState: { errors, isValid }} = useForm<FormData>({ resolver: zodResolver(schema) });

  const formSubmit = (data: FieldValues) => {
    console.log("hello", data);

    signup.mutate({username: data.username, password: data.password, email: data.email},

      {onSuccess: (createdSurvey) => {navigate("/login", { state: { message: "Account created successfully!" } });
      ;},
        onError: (error:any) => {
          console.log("it is error", error, );
          setErrorMsg("Användarnamn och lösenord passade inte...");
          console.log(error.response.data)
          if (error.response.data.password){setPasswordErrorMsg(error.response.data.password[0]) } else {setPasswordErrorMsg("")}
          if (error.response.data.email){setEmailErrorMsg(error.response.data.email[0]); console.log("problems with email") } else {setEmailErrorMsg(""); console.log("no problem")}
          if (error.response.data.username){setUsernameErrorMsg(error.response.data.username[0]) } else {setUsernameErrorMsg("")}
        },
      }
    );
  };

  return (
    <>
      <div className=" max-w-[1200px] pt-[15vh] pb-[15vh] relative h-[100vh] m-auto flex gap-24 w-full px-6 lg:px-6">
        <div className="mt-36  md:max-w-[450px] w-full m-auto">
          <div className="relative  pb-8">
            <h1 className="text-3xl font-medium" >Get Started</h1>
            <p className="opacity-70">Välkommen till Larking Budget - Dags att skapa ditt konto</p>
            <span className="block absolute bottom-0 w-full h-[1px] opacity-70 bg-gray-300"></span>
          </div>
          <form action="" method="POST" className="flex flex-col gap-6 mt-8" onSubmit={handleSubmit(formSubmit)}>
            <div className="flex flex-col">
              <label className="font-medium">Anvädnarnamn </label>
              <input className={`transition duration-150 focus:outline-none  ${UsernameErrorMsg ? 'border-rose-600 border' : 'focus:border-green-700'} p-1.5 rounded w-full border border-gray-200`} type="text"  {...register('username')} id="username" name="username"/>
              <p>{!!errors['username']}</p>
              <p className="text-red-500">{errors.username?.message}</p>
              <p className="text-red-500 ">{UsernameErrorMsg}</p>
              
            </div>
            
            <div className="flex flex-col">
              <label className="font-medium">Email </label>
              <input className={`transition duration-150 focus:outline-none  ${EmailErrorMsg ? 'border-rose-600 border' : 'focus:border-green-700'} p-1.5 rounded w-full border border-gray-200`} type="text"  {...register('email')} id="email" name="email"/>
              <p>{!!errors['email']}</p>
              <p className="text-red-500">{errors.email?.message}</p>
              <p className="text-red-500">{EmailErrorMsg}</p>
            </div>

            <div>
              <label className="font-medium">Lösenord</label>
              <input className={`transition duration-150 p-1.5 rounded w-full border border-gray-200 focus:outline-none  ${PasswordErrorMsg ? 'border-rose-600 border' : 'focus:border-green-700'} `}  {...register('password')} type="password" id="password" name="password" />
              <p className="text-red-500">{errors.password?.message}</p>
              <p className="text-red-500">{PasswordErrorMsg}</p>
              
            </div>
            <div className="flex flex-col items-center gap-4">
             <input type="submit" value="Registrera Dig" className="cursor-pointer transition-colors duration-150  hover:bg-green-700 bg-green-600  w-full p-1.5 rounded text-white font-medium "/>
             
             <div className="flex gap-2">
             <p className="text-gray-400">Har du redan ett konto?</p>
             <a className=" font-medium hover:underline underline-offset-4" href="/login">Logga in</a>
             </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block bg-blue-950 bg-[url('loginAurora.jpg')] bg-cover h-[100%] flex-1 rounded-[20px]">
          <h1 className="text-green-100 text-6xl m-16 ">
            <span>Enter</span>
            <span className="block">the Future</span>
            <span className="block ml-16">of Budgets</span>
            <span className="bloick ml-16">Today</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;