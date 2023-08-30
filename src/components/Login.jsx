import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { NavLink,useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  // Email Validator
function isValidEmail(email) {
  // This is a basic example using a regular expression for email validation.
  // You can use more sophisticated email validation libraries for production.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password Validator
function isValidPassword(password) {
  // This example requires the password to have at least 8 characters.
  return password.length >= 6;
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isValidEmail(email))
    {
      toast.error('Email is invalid!');
      return

    }
    if(!isValidPassword(password))
    {
      toast.error('Password must be 6 characters long!')
      return
    }
        toast("Logging you in, please wait!")

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token',response.data.token)
      localStorage.setItem('userId',response.data.userId)
      toast.success("Logged in successfully!");
      navigate('/')
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };
  return (
    <section className="w-9/12">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}  >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                  <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet?{' '}
                      <NavLink to='/register' className="font-medium text-primary-600 hover:underline" >Sign up</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  );
};

export default Login;
