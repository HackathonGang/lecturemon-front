import { FC } from 'react'
import { RadioInput, TextInput, CheckboxInput, SelectInput, SliderInput } from '../../components/forms';
import Layout from '../../components/layout'

const Polls: FC = () => {


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

                            <TextInput ref={undefined} question="Question 1" placeholder="poo" id="1" />

                            <RadioInput ref={undefined} question="Question 2" id="radio-2" options={[{name: "Option 1", key: "opt1"}, {name: "Option 2", key: "opt2"}, {name: "Option 3", key: "opt3"}]} />

                            <CheckboxInput ref={undefined} question="Question 3" id="check-1" options={[{name: "Check 1", id: "check1"}, {name: "Check 2", id: "check2"}, {name: "Check 3", id: "check2"}]}/>

                            <SelectInput ref={undefined} question="Question 4" id="select-1" options={[{ name: "Option 1", key: "opt1"}, { name: "Option 2", key: "opt2"}]} />

                            <SliderInput ref={undefined} question="Question 5" id="slider-1" min={1} max={5} step={1} startText="Disagree" endText="Agree" />


                            <button type="submit" className="btn">Submit Feedback</button>
                        </form>
    
                    </div>
                

            </div>
            </Layout>
        </>
    )
}

export default Polls;