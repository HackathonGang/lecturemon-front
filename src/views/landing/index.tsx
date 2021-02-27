import { FC } from 'react'
import { Link } from 'react-router-dom';

const Landing: FC = () => {
    return (
        <>
            <div className="relative bg-white overflow-hidden h-screen">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
                    
                        <div className="text-center flex flex-col items-center">
                            <h1 className="text-9xl font-bold text-purple-500 pb-4">LectureMon</h1>
                            <p className="text-lg font-bold">Because we are way better than you will ever be!</p>

                            <div className="flex mt-8">
                                <Link to="login" className="shadow rounded-md py-1 px-4 text-xl hover:bg-gray-100 mr-10">Login</Link>
                                <Link to="register" className="shadow rounded-md py-1 px-4 text-xl hover:bg-gray-100">Register</Link>
                            </div>

                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Landing;