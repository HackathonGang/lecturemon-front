import { FC } from 'react'


interface IProgress {
    current: number
    max: number
    quantity: string
}

const Progress: FC<IProgress> = ({ current, max, quantity }) => {
    return (
        <div className="shadow w-3/4 bg-grey-light" style={{height: "150%"}}>
            <div className="bg-green-500 text-xs leading-none py-2 text-center text-white z-10 transition-width" style={{width: current/max*100+ "%"}}>{`${current}/${max} ${quantity}`}</div>
        </div>
    )
}

export default Progress