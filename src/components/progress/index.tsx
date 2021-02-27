import { FC } from 'react'


interface IProgress {
    current: number
    max: number
    quantity: string
}

const Progress: FC<IProgress> = ({ current, max, quantity }) => {
    return (
        <div className="shadow w-full bg-grey-light rounded-full">
            <div className="bg-green-500 text-xs leading-none py-1 text-center text-white z-10" style={{width: current/max*100+ "%"}}>{`${current}/${max} ${quantity}`}</div>
        </div>
    )
}

export default Progress