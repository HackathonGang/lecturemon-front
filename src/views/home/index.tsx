import { FC, useContext } from 'react'
import Layout from '../../components/layout'
import Progress from '../../components/progress';
import UserContext from '../../context/user'
import XpContext from '../../context/xp';

const Home: FC = () => {

    const { user } = useContext(UserContext)!;


    return (
        <>
            <Layout pageName="Dashboard">

                <div className="grid grid-flow-col grid-cols-2 gap-2">
                    <div>
                        <h2 className="text-xl">To do</h2>
                    </div>
                    
                    <div>
                        <h2 className="text-xl">Modules</h2>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;