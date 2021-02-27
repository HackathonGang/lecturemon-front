import { FC, useContext } from 'react'
import Layout from '../../components/layout'
import Progress from '../../components/progress';
import UserContext from '../../context/user'

const Home: FC = () => {

    const { user } = useContext(UserContext)!;

    return (
        <>
            <Layout pageName="Dashboard">

                <h1 className="mt-20 text-4xl font-bold">Hello, { user.name }</h1>
                <Progress current={10} max={60} quantity="xp"/>
                <small>Ready to catch them all?</small>
            </Layout>
        </>
    )
}

export default Home;