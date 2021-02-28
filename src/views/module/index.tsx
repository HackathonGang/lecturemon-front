import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import Layout from '../../components/layout';
import TradingCard from '../../components/trading_cards';



interface IModule {
    module_name: string
    module_lecturer: string
    module_code: string
    coursework_score: number
    enjoyability_score: number
    difficulty_score: number
    lecture_satisfaction: number
}

const Module: FC = () => {

    const [module, setModule] = useState<IModule>()


    // usercontext will allow a check if the username from the server is yours, then highlight yourself

    const values = useParams<{id: string}>()

    const hist = useHistory()

    useEffect(() => {



        axios.get(`/api/module/${values.id}`).then(data =>{
            console.log(data)
            setModule(data.data)
        }).catch(err => {
            hist.push('/')
        })

    }, [setModule, values.id, hist])


    return (
        <>
            <Layout pageName="Module">
                <h1 className="mt-5 text-4xl font-bold">{ module?.module_name || "No Name Found" }</h1>
                <p>
                    Lecturer: { module?.module_lecturer || "No Lecturer Found"}
                    <br/>
                    Code: { module?.module_code || "No Code Found"}
                </p>

                <div className="mt-5 grid grids-cols-1 md:grid-cols-4 gap-8">
                {
                    ["common","rare","epic","legendary"].map(rarity => {
                        return (
                            <TradingCard rarity={rarity} name={ module?.module_name || ""} imgURL="https://pbs.twimg.com/media/C4MRT1NVUAAq0Hr.jpg" stats={[{name: "Coursework", value: module?.coursework_score || 0},
                                {name: "Enjoyability", value: module?.enjoyability_score || 0},{name: "Difficulty", value: module?.difficulty_score || 0},{name: "Lecture", value: module?.lecture_satisfaction || 0}]}/>
                        )
                    })
                }
                </div>

            </Layout>
        </>
    )
}

export default Module;