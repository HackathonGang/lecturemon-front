import { FC } from 'react'
import Layout from '../../components/layout';

const Profile: FC = () => {
    return (
        <>
            <Layout pageName="Profile">
                <p className="w-40 my-2 border-2 border-green-600 rounded-full py-2 px-4 text-center text-green-600">✦ Course Rep</p>
                <h2 className="mt-5 mb-2 text-3xl font-bold">Inventory</h2>

                <div className="grid grid-cols-4 gap-4 shadow-lg">
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                    <div>Trading Card</div>
                </div>
            </Layout>
        </>
    )
}

export default Profile;