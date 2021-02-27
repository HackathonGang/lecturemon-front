import axios from 'axios';
import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface ILoginForm {
    uniemail: string
    password: string
}

const Login: FC = () => {

    const { register, handleSubmit, errors } = useForm<ILoginForm>()

    const onSubmit = async (data: ILoginForm) => {
        let raw = await axios.post("", data);
        console.log(raw)
    }

    return (
        <>
            <div className="relative bg-white overflow-hidden h-screen">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
                
                    <div className="shadow border-md p-4 text-center flex flex-col w-1/3">
                        <h2 className="mb-3 text-lg">Sign-in</h2>
                        <small className="underline hover:text-gray-500"><Link to="/signup">Sign-up?</Link></small>

                        <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <label className="text-left" htmlFor="email">University Email</label>
                            <input className={`input ${errors.uniemail ? "input-error" : ""}`} type="text" name="email" id="email" ref={register({ required: true })}/>
                            {
                                errors.uniemail?.type === "required" &&
                                <small className="text-left text-red-500">Please enter your university email!</small>
                            }

                            <label className="text-left mt-3" htmlFor="password">Password</label>
                            <input className={`input ${errors.password ? "input-error" : ""}`} type="password" name="password" id="password" ref={register({ required: true })}/>
                            {
                                errors.password?.type === "required" &&
                                <small className="text-left text-red-500">Please enter your password!</small>
                            }

                            <span className="my-2" />

                            <button type="submit" className="btn">Sign-in</button>
                        </form>
                        

                        
                     



                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Login;