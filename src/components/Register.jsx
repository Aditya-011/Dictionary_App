import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
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
        else if(!isValidPassword(password))
        {
          toast.error('Password must be 6 characters long!')
          return
        }
        else if(password != confpassword)
        {
            toast.error("Passwords doesn't match!")
            return
        }
                  toast("Creating account, please wait!")

        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
            email,
            password,
          });
          
          toast.success("Account created successfully!");
          navigate('/login')
        } catch (error) {
          toast.error("Error creating Acoount!");
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
                      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div>
                      <label htmlFor="confpassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                      <input value={confpassword} onChange={(e)=>{setConfpassword(e.target.value)}} type="password" name="confpassword" id="confpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                  <p className="text-sm font-light text-gray-500">
                      Already have an account? {' '}
                      <Link to='/login' className="font-medium text-primary-600 hover:underline" replace>Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );
}

export default Register;
