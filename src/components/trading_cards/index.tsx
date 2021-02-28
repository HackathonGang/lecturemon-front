import { Stats } from 'fs'
import { FC } from 'react'


interface IStat {
    name: string
    value: number
}

interface ITradingCard {
    name: string,
    imgURL: string,
    stats: IStat[]

}


const TradingCard: FC<ITradingCard> = ({ name, imgURL, stats}) => {




    return (
        <div className="flex flex-col justify-center items-center">
            <div className="shadow rounded-md flex flex-col justify-center p-4">
                <img src={imgURL} alt="" className="w-48 h-48 mb-2"/>
                <h1 className="text-lg">{ name }</h1>
                <div className="text-left">
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