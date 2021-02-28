import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import TradingCard from '../../components/trading_cards';

interface ICard {
    card_id: number
    card_rarity: string
    module_name: string
    module_code: string
    module_id: number
}

const Profile: FC = () => {

    const [cards, setCards] = useState<ICard[]>()

    useEffect(() => {
        axios.get("/api/getusercards").then(data => {
            console.log(data)

            setCards(data.data)

            

        })


    }, [setCards])


    return (
        <>
            <Layout pageName="Profile">
                <p className="w-40 my-2 border-2 border-green-600 rounded-full py-2 px-4 text-center text-green-600">✦ Course Rep</p>
                <h2 className="mt-5 mb-2 text-3xl font-bold">Inventory</h2>

                <div className="grid grid-cols-4 gap-8">
                    {
                        cards?.map(card => {
                            return (
                                <Link to={`/module/${card.module_id}`}>
                                    <TradingCard name={card.module_code + ": " + card.module_name} imgURL="https://pbs.twimg.com/media/C4MRT1NVUAAq0Hr.jpg" stats={[]}></TradingCard>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </Layout>
        </>
    )
}

export default Profile;