import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/layout'
import UserContext from '../../context/user';
import { IModule, ISurvey } from '../../interfaces';

const Home: FC = () => {


    const [modules, setModules] = useState<IModule[]>([]);
    const [surveys, setSurveys] = useState<ISurvey[]>([]);

    const { setUser } = useContext(UserContext)

    useEffect(() => {
      




        axios.get("/api/modules").then(data => {
            console.log(data.data)

            setModules(data.data)

            

        }).catch(err => setUser({logged: false}));

        axios.get("/api/surveys").then(data => {
            console.log(data)

            setSurveys(data.data)
        })
    


    }, [setUser])

    return (
        <>
            <Layout pageName="Dashboard">

                <div className="grid grid-flow-col grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl mb-2">To do</h2>

                        {
                            surveys.map(td => {
                                return (
                                    <Link to={`/poll/${ td.survey_id }`} key={ td.survey_id } className="group shadow rounded-md h-auto overflow-hidden flex items-center mb-3 hover:bg-gray-200">
                                        <p className="uppercase border border-gray-200 border-l-0 border-t-0 border-b-0 h-full py-2 px-4 group-hover:border-white">{ td.survey_type }</p>
                                        <p className="py-2 px-4">{ td.survey_name }</p>
                                    </Link>
                                )
                            })
                        }
                                       
                        {
                            surveys.length === 0 &&
                            <p>No surveys found!</p>
                        }

                    </div>
                    
                    <div>
                        <h2 className="text-xl mb-2">Modules</h2>
                        {
                            modules.map(module => {
                                return (
                                    <Link to={`/module/${ module.module_id }`} key={ module.module_id } className="group shadow rounded-md h-auto overflow-hidden flex items-center mb-3 hover:bg-gray-200">
                                        <p className="uppercase border border-gray-200 border-l-0 border-t-0 border-b-0 h-full py-6 px-4 group-hover:border-white">{ module.module_code }</p>
                                        <div className="py-2 px-4">
                                            <p className="">{ module.module_name }</p>
                                            
                                            <Link to={`/lecturer/${module.lecturer_id}`}><small className="text-gray-500 text-xs">{ module.module_lecturer }</small></Link>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {
                            modules.length === 0 &&
                            <p>No modules found!</p>
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;