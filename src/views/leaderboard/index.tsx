import { FC, useContext } from 'react'
import Layout from '../../components/layout';
import UserContext from '../../context/user'

const Leaderboard: FC = () => {

    const { user } = useContext(UserContext)!;
    // usercontext will allow a check if the username from the server is yours, then highlight yourself

    return (
        <>
            <Layout pageName="Leaderboard">
                <h1 className="mt-5 text-4xl font-bold">Leaderboard</h1>
                <small>Climb to the top for some special (possibly monetary) rewards!</small>

                <div className="grid grid-cols-3 gap-4 bg-gray-300 m-4">
                    <div className="font-bold">User</div>
                    <div className="font-bold">Level</div>
                    <div className="font-bold">No. Cards</div>

                    <div>1. [User]</div>
                    <div>Level 69 Mafia Boss</div>
                    <div>20</div>

                    <div>2. [Loser]</div>
                    <div>2</div>
                    <div>2</div>

                    <div className="bg-green-400">3. £500 Loot Box</div>
                    <div>1</div>
                    <div>0</div>
                </div>
            </Layout>
        </>
    )
}

export default Leaderboard;