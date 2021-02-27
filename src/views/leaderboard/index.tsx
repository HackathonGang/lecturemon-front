import { FC, useContext } from 'react'
import Layout from '../../components/layout';
import UserContext from '../../context/user'

const Leaderboard: FC = () => {


    // usercontext will allow a check if the username from the server is yours, then highlight yourself

    return (
        <>
            <Layout pageName="Leaderboard">
                <h1 className="mt-5 text-4xl font-bold">Leaderboard</h1>
                <small>Climb to the top for some special (possibly monetary 👀) rewards!</small>

                <div className="grid grid-cols-3 shadow-lg">
                    <div className="font-bold border-2 border-r-0 p-1">User</div>
                    <div className="font-bold border-2 border-r-0 p-1">Level</div>
                    <div className="font-bold border-2 border-l-2 p-1">No. Cards</div>

                    <div className="p-1 border-l-2">1. [User]</div>
                    <div className="p-1 border-l-2">Level 69 Mafia Boss</div>
                    <div className="p-1 border-l-2 border-r-2">20</div>

                    <div className="p-1 border-l-2">2. [Loser]</div>
                    <div className="p-1 border-l-2">2</div>
                    <div className="p-1 border-l-2 border-r-2">2</div>

                    <div className="bg-blue-400 p-1 border-l-2">3. £500 Loot Box</div>
                    <div className="bg-blue-400 p-1 border-l-2">1</div>
                    <div className="bg-blue-400 p-1 border-l-2 border-r-2">0</div>
                </div>
            </Layout>
        </>
    )
}

export default Leaderboard;