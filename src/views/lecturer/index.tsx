import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import TradingCard from '../../components/trading_cards';



interface ILecture {
    lecturer_name: string
    friendliness_score: number
    speed_of_response: number
    module_list: IModule[]
}

interface IModule {
    module_id: number
    module_name: string
    module_code: string
}

const Lecturer: FC = () => {

    const [lecturer, setLecturer] = useState<ILecture>()


    // usercontext will allow a check if the username from the server is yours, then highlight yourself

    const values = useParams<{id: string}>()

    const hist = useHistory()

    useEffect(() => {



        axios.get(`/api/lecturer/${values.id}`).then(data =>{
            console.log(data)
            setLecturer(data.data)
        }).catch(err => {
            hist.push('/')
        })

    }, [setLecturer, values.id, hist])


    return (
        <>
            <Layout pageName="Lecturer">
                <h1 className="mt-5 text-4xl font-bold">{ lecturer?.lecturer_name|| "No Name Found" }</h1>
                <br/>
                <p>Get a higher rarity card by completing more of the lecturer surveys as they come out!</p>

                <div className="mt-5 grid grids-cols-1 md:grid-cols-4 gap-8">
                {
                    ["common","rare","epic","legendary"].map(rarity => {
                        return (
                            <TradingCard rarity={rarity} name={ lecturer?.lecturer_name || ""} imgURL="https://pbs.twimg.com/media/C4MRT1NVUAAq0Hr.jpg" stats={[{name: "Friendliness", value: lecturer?.friendliness_score || 0},
                                {name: "Response Time", value: lecturer?.speed_of_response || 0}]}/>
                        )
                    })
                }
                </div>

                <div className="grid grid-cols-4 mt-4">
                    { 
                        lecturer?.module_list.map(module => {
                            return (
                                <Link to={`/module/${ module.module_id }`} key={ module.module_id } className="group shadow rounded-md h-auto overflow-hidden flex items-center mb-3 hover:bg-gray-200">
                                        <p className="uppercase border border-gray-200 border-l-0 border-t-0 border-b-0 h-full py-4 px-4 group-hover:border-white">{ module.module_code }</p>
                                        <div className="py-2 px-4">
                                            <p className="">{ module.module_name }</p>
                                        </div>
                                    </Link>
                            )
                        })    
                    }
                </div>

            </Layout>
        </>
    )
}

export default Lecturer;