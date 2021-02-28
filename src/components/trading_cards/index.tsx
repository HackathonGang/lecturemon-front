import { Stats } from 'fs'
import { FC } from 'react'


interface IStat {
    name: string
    value: number
}

interface ITradingCard {
    name: string,
    imgURL: string,
    rarity?: string,
    stats: IStat[]

}


const TradingCard: FC<ITradingCard> = ({ name, imgURL, rarity, stats}) => {


    let text_color: string = "black"
    let rarity_color: string = "black"
    let bg_color: string = "bg-gradient-to-r from-green-300 to-green-800"

    switch (rarity) {
        case "common":
            text_color = "white"
            rarity_color = "white"
            bg_color = "bg-gradient-to-r from-green-300 to-green-700"
            break

        case "rare":
            text_color = "white"
            rarity_color = "white"
            bg_color = "bg-gradient-to-r from-blue-300 to-blue-700"
            break

        case "epic":
            text_color = "white"
            rarity_color = "black"
            bg_color = "bg-gradient-to-r from-indigo-300 to-purple-700"
            break

        case "legendary":
            text_color = "white"
            rarity_color = "gold"
            bg_color = "bg-gradient-to-r from-yellow-300 to-red-700"
            break

        default:
            break;

    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`shadow rounded-md flex flex-col justify-center p-4 ${bg_color}`} style={{color: text_color}}>
                <small className="uppercase text-center pb-2 font-bold" style={{color: rarity_color}}>{ rarity }</small>
                <img src={imgURL} alt="" className="w-48 h-48 mb-2"/>
                <h1 className="text-lg text-center mb-1">{ name }</h1>
                <div className="text-left p-2 border border-gray-600" style={{backgroundColor: "rgba(0,0,0,0.15)"}}>
                    { stats.map(stat => {
                        return (
                            <p className="text-sm">{ stat.name }: { stat.value }/5</p>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default TradingCard