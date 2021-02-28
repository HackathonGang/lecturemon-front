import axios from 'axios';
import { ReactNode, useContext, useEffect } from 'react';
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { RadioInput, TextInput, SelectInput, SliderInput } from '../../components/forms';
import Layout from '../../components/layout'
import XpContext from '../../context/xp';

interface IPollData {
    survey_id: number
    survey_title: string
    description: string
    target: number // Id
    target_type: string // "lecture"/"module"
}

interface IQuestion {
    title: string
    type: string
    options: Array<any>
}

interface IPostResult {
    survey_id: number
    target: number
    target_type: string
    answers: any[]
}

const Polls: FC = () => {

    const { register, handleSubmit, errors, trigger } = useForm();

    const [maxQ, setMaxQ] = useState<number>(0);

    const values = useParams<{id: string}>()

    const pid = values.id;

    const { xp, setXp } = useContext(XpContext)!;

    const hist = useHistory()

    const onSubmit = (data: any) => {

        let answ: any[] = []

        for (let i = 1; i <= maxQ; i++){
            answ.push(data[""+i])
        }

        let postData: IPostResult = {
            survey_id: pollData?.survey_id || -1,
            target: pollData?.target || -1,
            target_type: pollData?.target_type || "",
            answers: answ

        }

        console.log(postData)

        axios.post("/api/surveyresponse", pollData).then(data => {
            console.log(data)

            axios.get("/api/ping").then(data => {

          
                setXp({
                  ...xp,
                  current: data.data.xp
                })

                setTimeout(() => {
                    hist.push("/")
                }, 1005)
          
          
          
              })
        })




    }

    const [pollData, setPollData] = useState<IPollData>();

    const [questions, setQuestions] = useState<ReactNode[]>([]);


    useEffect(() => {

        axios.get(`/api/survey/${pid}`).then(data => {
            console.log(data)

            setPollData(data.data)

            let questions: IQuestion[] = data.data.questions

            
        let id = 0;

        let questionsToAdd: ReactNode[] = []

        questions.forEach(question => {
            id++;
            let toAdd;

            switch (question.type){
                case "text":
                    toAdd = <TextInput triggerValidation={trigger} errors={errors} reff={register({ required: true })} question={question.title} placeholder="Answer here" id={""+id}/>
                    break;

                case "radio":
                    toAdd = <RadioInput triggerValidation={trigger} errors={errors} reff={register({ required: true })} question={question.title} id={""+id} options={question.options} />
                    break;

                case "select":
                    toAdd = <SelectInput triggerValidation={trigger} errors={errors} reff={register({ required: true, validate: value => value !== "null" || "Please select an option" })} question={question.title} id={""+id} options={question.options} />
                    break;

                case "slider":
                    toAdd = <SliderInput triggerValidation={trigger} errors={errors} reff={register({ required: true })} question={question.title} id={""+id} min={1} max={5} step={1} startText={question.options[0] || ""} endText={question.options[1] || ""} />
            }

            

            
            questionsToAdd.push(toAdd)
            
        setMaxQ(id)

        setQuestions(questionsToAdd)
        })

        })




    }, [register, errors, trigger, pid])



    return (
        <>
            <Layout pageName="Dashboard">

                <h1 className="mt-2 mb-1 text-4xl font-bold capitalize">[{ pollData?.target_type || "No type"}] { pollData?.survey_title || "No Survey Title" }</h1>
                <small className="text-lg">{ pollData?.description || "No Description" }</small>

           
                <div className="w-full mt-4 mx-auto h-full flex items-center justify-center">
                
                    <div className="shadow border-md p-4 text-center flex flex-col w-11/12">
                        <h2 className="mb-3 text-lg">Feedback Form</h2>
                        <small className="underline hover:text-gray-500"></small>

                        <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)} >

                            { questions.map((q, ind) => {
                                return (
                                    <span key={ind}>
                                    {q}
                                    </span>
                                )
                            })}
{/* 
                            <TextInput errors={errors} reff={register({ required: true })} question="Question 1" placeholder="poo" id="1" />

                            <RadioInput errors={errors} reff={register({ required: true })} question="Question 2" id="radio-2" options={[{name: "Option 1", key: "opt1"}, {name: "Option 2", key: "opt2"}, {name: "Option 3", key: "opt3"}]} />


                            <SelectInput errors={errors} reff={register({ required: true, validate: value => value !== "null" || "Please select an option" })} question="Question 4" id="select-1" options={[{ name: "Option 1", key: "opt1"}, { name: "Option 2", key: "opt2"}]} />

                            <SliderInput errors={errors} reff={register({ required: true })} question="Question 5" id="slider-1" min={1} max={5} step={1} startText="Disagree" endText="Agree" /> */}


                            <button type="submit" className="btn">Submit Feedback</button>
                        </form>
    
                    </div>
                

            </div>
            </Layout>
        </>
    )
}

export default Polls;