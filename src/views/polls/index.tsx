import { FC, useContext } from 'react'
import Layout from '../../components/layout'
import UserContext from '../../context/user'

const Polls: FC = () => {

    const { user } = useContext(UserContext)!;

    return (
        <>
            <Layout pageName="Dashboard">

                <h1 className="mt-2 text-4xl font-bold">[Module] Poll</h1>
                <small>Give feedback on [module] to get 0.0001XP! (Want more? Buy a bargain £500 lootbox for a chance to win a 2x XP boost!)</small>

           
                <div className="w-full mt-4 mx-auto h-full flex items-center justify-center">
                
                    <div className="shadow border-md p-4 text-center flex flex-col w-11/12">
                        <h2 className="mb-3 text-lg">Feedback Form</h2>
                        <small className="underline hover:text-gray-500"></small>

                        <form className="w-full flex flex-col">

                            <label className="text-left" htmlFor="q1">1. [Question e.g. rate something]</label>
                            <input className="input" type="text" name="q1" id="q1" />

                            <label className="text-left" htmlFor="q2">2. [Another question]</label>
                            <input className="input" type="text" name="q2" id="q2" />

                            <label className="text-left" htmlFor="q3">3. [Where is Kai's leg?]</label>
                            <input className="input" type="text" name="q3" id="q3" />

                            <label className="text-left" htmlFor="q4">4. [Yet another question]</label>
                            <input className="input" type="text" name="q4" id="q4" />

                            <label className="text-left mt-3" htmlFor="uni">5. A dropdown question!!</label>
                            <select className="input" name="q5" id="q5">
                                <option value="null">Why's this text so fucking big???</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>

                            <span className="my-2" />

                            <button type="submit" className="btn">Submit Feedback</button>
                        </form>
    
                    </div>
                

            </div>
            </Layout>
        </>
    )
}

export default Polls;