import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/layout'
import { IModule, IToDo } from '../../interfaces';

const Home: FC = () => {

    const [toDo, setToDo] = useState<IToDo[]>([]);
    const [modules, setModules] = useState<IModule[]>([]);

    useEffect(() => {
        setToDo([
            {
                moduleCode: "cs141",
                title: "Lecture Survey",
                id: 1
            },
            {
                moduleCode: "cs132", 
                title: "Module Survey",
                id: 2
            }
        ])

        setModules([
            {
                moduleCode: "cs141",
                name: "Functional Programming",
                organiser: "Michael Gale",
                id: 141
            }
        ])
    }, [])

    return (
        <>
            <Layout pageName="Dashboard">

                <div className="grid grid-flow-col grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl mb-2">To do</h2>

                        {
                            toDo.map(td => {
                                return (
                                    <Link to={`/poll/${ td.id }`} key={ td.id } className="group shadow rounded-md h-auto overflow-hidden flex items-center mb-3 hover:bg-gray-200">
                                        <p className="uppercase border border-gray-200 border-l-0 border-t-0 border-b-0 h-full py-2 px-4 group-hover:border-white">{ td.moduleCode }</p>
                                        <p className="py-2 px-4">{ td.title }</p>
                                    </Link>
                                )
                            })
                        }

                    </div>
                    
                    <div>
                        <h2 className="text-xl mb-2">Modules</h2>
                        {
                            modules.map(module => {
                                return (
                                    <Link to={`/module/${ module.id }`} key={ module.id } className="group shadow rounded-md h-auto overflow-hidden flex items-center mb-3 hover:bg-gray-200">
                                        <p className="uppercase border border-gray-200 border-l-0 border-t-0 border-b-0 h-full py-6 px-4 group-hover:border-white">{ module.moduleCode }</p>
                                        <div className="py-2 px-4">
                                            <p className="">{ module.name }</p>
                                            <small className="text-gray-500 text-xs">{ module.organiser }</small>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;