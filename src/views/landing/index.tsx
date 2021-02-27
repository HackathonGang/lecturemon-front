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
                                <Link to="/signup" className="btn mr-5 btn-green">Sign-up</Link>
                                <Link to="/signin" className="btn">Sign-in</Link>
                            </div>

                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Landing;