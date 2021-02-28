import { FC } from 'react'


interface IProgress {
    current: number
    max: number
    quantity: string
}

const Progress: FC<IProgress> = ({ current, max, quantity }) => {


    max = 100

    let level = Math.floor(current/100)

    current = current - (level*100)


    let showWidth = current/max*100+ "%"




    let showXp = `${current}/${max} ${quantity}`

    if (current > max) {
        showWidth = "100%"
        showXp = `${max}/${max} ${quantity}`
    }


    return (
        <div className="shadow w-3/4 bg-grey-light" style={{height: "150%"}}>
            <div className="bg-green-500 text-xs leading-none py-2 text-center text-white z-10 transition-width duration-1000 whitespace-nowrap" style={{width: showWidth}}>{ showXp }</div>
        </div>
    )
}

export default Progress