import React, {useState} from 'react'
import firebase from '../firebase'

function CreateObject(props){
    const[task, setTask] = useState("")
    const[time, setTime]= useState("")
    const updateName = (e)=>{
        setTask(e.target.value)
    }
    const updatePrice = (e)=> {
        setTime(e.target.value)
    }
    const addMovie = (e)=>{
        e.preventDefault()
        firebase.firestore().collection(props.collection).add({
            task,
            time
          }).then(() =>{
              setTask('')
              setTime('')
          }
          )
    }
    return(
        <form onSubmit= {addMovie}>
            <input type ="text" name= "task" value={task} onChange = {updateName}/>
            <input type ="text" name= "time" value = {time} onChange = {updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

export default CreateObject