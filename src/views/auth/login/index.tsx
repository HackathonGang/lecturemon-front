import axios, { AxiosResponse } from 'axios';
import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../../context/user';
import XpContext from '../../../context/xp';

interface ILoginForm {
    uniemail: string
    password: string
}

interface IError {
    error: string
    errorField: string
}

interface IResp {
    id: number
    name: string
    xp: number
}

const Login: FC = () => {

    const { register, handleSubmit, errors, setError } = useForm<ILoginForm>()

    const {user, setUser} = useContext(UserContext)!;

    const { xp, setXp } = useContext(XpContext)!;

    const hist = useHistory()

    const onSubmit = async (data: ILoginForm) => {
        axios.post("/api/signin", data).then((ret: AxiosResponse<IResp>) => {
            setUser({
                id: ret.data.id,
                name: ret.data.name,
                logged: true
            })
            setXp({
                ...xp,
                current: ret.data.xp
              })

            hist.push("/")

        }).catch(err => {
            console.log(err.response.data)

            err.response.data.forEach((ob: IError) => {
                switch (ob.errorField){
                    case "uniemail":
                        setError('uniemail', { message: ob.error })
                        break
                    

                    case "password":
                        setError('password', { message: ob.error })
                        break
                }

            })
        })

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
                            <input className={`input ${errors.uniemail ? "input-error" : ""}`} type="text" name="uniemail" id="email" ref={register({ required: true })}/>
                            {
                                errors.uniemail?.type === "required" &&
                                <small className="text-left text-red-500">Please enter your university email!</small>
                            }
                            {
                                errors.uniemail &&
                                <small className="text-left text-red-500">{ errors.uniemail.message }</small>
                            }

                            <label className="text-left mt-3" htmlFor="password">Password</label>
                            <input className={`input ${errors.password ? "input-error" : ""}`} type="password" name="password" id="password" ref={register({ required: true })}/>
                            {
                                errors.password?.type === "required" &&
                                <small className="text-left text-red-500">Please enter your password!</small>
                            }
                            {
                                errors.password &&
                                <small className="text-left text-red-500">{ errors.password.message }</small>
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