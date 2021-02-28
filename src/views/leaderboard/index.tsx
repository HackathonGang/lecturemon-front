import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import Layout from '../../components/layout';



interface ILeaderboard {
    name: string
    xp: number
}

const Leaderboard: FC = () => {

    const [leaderboard, setLeaderboard] = useState<ILeaderboard[]>([]);


    // usercontext will allow a check if the username from the server is yours, then highlight yourself

    useEffect(() => {
        axios.get("/api/leaderboard").then(data => {
            console.log(data)

            setLeaderboard(data.data);
        })
    }, [setLeaderboard])

    return (
        <>
            <Layout pageName="Leaderboard">
                <h1 className="mt-5 text-4xl font-bold">Leaderboard</h1>
                <small>Climb to the top for some special (possibly monetary 👀) rewards!</small>

                <div className="grid grid-cols-3 shadow-lg">
                    <div className="font-bold border-2 border-r-0 p-1">User</div>
                    <div className="font-bold border-2 border-r-0 p-1">Xp</div>
                    <div className="font-bold border-2 border-l-2 p-1">No. Cards</div>

                    { leaderboard.map(lb => {
                        return (
                            <>
                            <div className="p-1 border-l-2">{ lb.name }</div>
                            <div className="p-1 border-l-2">{ lb.xp }</div>
                            <div className="p-1 border-l-2 border-r-2">0</div>
                            </>
                        )
                    })}

                </div>
            </Layout>
        </>
    )
}

export default Leaderboard;