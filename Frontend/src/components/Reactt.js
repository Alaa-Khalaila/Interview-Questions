import React,{useState}  from 'react'
import {reactData} from '../Data/data'
import { Link } from 'react-router-dom';


const Reactt = () => {
    const [Started,setStarted]=useState(false);
    const [Solution,setSolution]=useState(false);
    const [Ran,setRan]=useState(0);
    const [Done,setDone]=useState([0])
    const [End,setEnd]=useState(false)


    const go_in=()=>{
        setStarted(true)
    };
    const get_solution=()=>{
        setSolution(true)
    }
    const nxt_question = ()=>{
        setSolution(false);
        random()
    }
    const random =()=>{
       let number = Math.floor(Math.random() * reactData.length);
       if(Done.length===reactData.length-1) {
           setEnd(true)
           return""
        }
       if(Done.includes(number)){
           random();
           return ''
       }
       setRan(number)
       Done.push(number)
       console.log(number)
    }
    return (
        <div className='container'>
        <div className='box'>
            {!Started?<button className='start' onClick={()=>go_in()}>START</button>:
            <div className='qa'>
                <h2>{reactData[Ran].question}</h2>
                {!Solution?<button className='sol-btn' onClick={()=>get_solution()}>Solution</button>:<h4>{reactData[Ran].answer}</h4>}
                <button className='next-btn' onClick={()=>nxt_question()}>Next</button>
                {End?<Link to='/'><button className='start'>Finished</button></Link>:''}
            </div>}
            
        </div> 

    </div>
    )
}

export default Reactt
