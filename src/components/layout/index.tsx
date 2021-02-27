import React, { FC, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../context/user'
import XpContext from '../../context/xp';
import Progress from '../progress'
import ball from "./bpoke.png"

interface ILayout {
    pageName: string
}

const Layout: FC<ILayout>  = ({ pageName, children }) => {


    useEffect(() => {
        document.title = `${pageName} | LectureMon`
    })

    const { user } = useContext(UserContext)!;
    const { xp } = useContext(XpContext)!;

    
    let nextLevel = 100;

    if (xp.level !== undefined) nextLevel = xp.level + 1

    return (
        <>
            <Navbar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <h1 className="mt-20 text-4xl font-bold mb-2">Hello, { user.name }</h1>
                    <small>Progress to level { nextLevel }: {`${Math.round(xp.current/xp.max * 100)}%`}</small>
                    { xp.current !== 0 && <Progress current={xp.current} max={xp.max} quantity={xp.quantifier} />}
                    <span className="m-5"></span>
                    { children }
                </div>
            </main>
        </>
    )   
}

export default Layout




const Navbar: FC = () => {
    return (
        <nav className="bg-white border border-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>

                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">

                            <img className="hidden lg:block h-7 w-auto" src={ball} alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-auto">
                            <div className="flex space-x-4">
                                <NavLink exact to="/" activeClassName="border border-black" className="text-gray-700 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</NavLink>
                                <NavLink to="/leaderboard" activeClassName="border border-black" className="text-gray-700 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leaderboard</NavLink>
                                <NavLink to="/profile" activeClassName="border border-black" className="text-gray-700 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</NavLink>
                                <button className="text-gray-700 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                            </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</NavLink>
                <NavLink to="/leaderboard" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leaderboard</NavLink>
                <NavLink to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</NavLink>
                <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</button>
            </div>
        </div>
        </nav>
    )
}