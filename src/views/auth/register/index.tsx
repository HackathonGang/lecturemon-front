import axios from 'axios';
import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface IRegisterForm extends ISubmission{
    conf_password: string
}

interface ISubmission {
    name: string
    password: string
    uni: string
    uniemail: string
    useremail: string
}



const Register: FC = () => {

    const { register, handleSubmit, errors, watch } = useForm<IRegisterForm>()

    const onSubmit = async (data: ISubmission) => {
        console.log(data)
        let raw = await axios.post("/api/signup", data);
        console.log(raw)
    }


    return (
        <>
            <div className="relative bg-white overflow-hidden h-screen">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
                
                    <div className="shadow border-md p-4 text-center flex flex-col w-1/3">
                        <h2 className="mb-3 text-lg">Sign-up</h2>
                        <small className="underline hover:text-gray-500"><Link to="/signin">Sign-in?</Link></small>

                        <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                            <label className="text-left" htmlFor="name">Name</label>
                            <input className={`input ${errors.name ? "input-error" : ""}`} type="text" name="name" id="name" ref={register({ required: true })}/>
                            {
                                errors.name?.type === "required" &&
                                <small className="text-left text-red-500">Please enter your name!</small>
                            }

                            <label className="text-left mt-3" htmlFor="password">Password</label>
                            <input className={`input ${errors.password ? "input-error" : ""}`} type="password" name="password" id="password" ref={register({ required: true })}/>
                            {
                                errors.password?.type === "required" &&
                                <small className="text-left text-red-500">Please enter a password</small>
                            }

                            <label className="text-left mt-3" htmlFor="password">Confirm Password</label>
                            <input className={`input ${errors.conf_password ? "input-error" : ""}`} type="password" name="conf_password" id="password" ref={register({ required: true, validate: value => value === watch("password", "") || "The passwords don't match!" })}/>
                            {
                                errors.conf_password &&
                                <small className="text-left text-red-500">{errors.conf_password.message}</small>
                            }


                            <label className="text-left mt-3" htmlFor="uni">University</label>
                            <select className={`select ${errors.uni ? "select-error" : ""}`} name="uni" id="uni" ref={register({required: true, validate: value => value !== "null" || "Please choose a university!"})}>
                                <option value="null">Please select your University</option>
                                <option value="warwick">University of Warwick</option>
                                <option value="durham">Durham University</option>
                            </select>
                            {
                                errors.uni &&
                                <small className="text-left text-red-500">{ errors.uni.message }</small>
                            }


                            <label className="text-left mt-3" htmlFor="uniemail">University Email</label>
                            <input className={`input ${errors.uniemail ? "input-error" : ""}`} type="email" name="uniemail" id="uniemail" ref={register({ required: true })}/>

                            {
                                errors.uniemail?.type === "required" &&
                                <small className="text-left text-red-500">Please enter an email!</small>
                            }

                            <label className="text-left mt-3" htmlFor="useremail">Personal Email</label>
                            <input className={`input ${errors.useremail ? "input-error" : ""}`} type="email" name="useremail" id="useremail" ref={register({ required: true })}/>
                            {
                                errors.useremail?.type === "required" &&
                                <small className="text-left text-red-500">Please enter an email!</small>
                            }


                            <span className="my-2" />

                            <button type="submit" className="btn">Sign-up</button>
                        </form>
                        

                        
                     



                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Register;