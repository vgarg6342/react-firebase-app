import React,{useContext} from 'react'
import {ProjectContext} from './ProjectContext'
import firebase from '../firebase'

function AddProjectDetails(){

    const addHandler = ()=>{
        setTodos(todos.concat([{'name': ''}]))
    }
    const[project,setProject,todos,setTodos] = useContext(ProjectContext)

    const projectHandler =(idx,e) =>{
        const newTodos = todos.map((todo,_idx)=>{
            if(idx !==_idx){ return todo};
            return{...todo,'name': e.target.value};
        })
        setTodos(newTodos)
    }
    const deleteHandler = (idx)=>{
        setTodos(todos.filter((s, sidx) => idx !== sidx))
    }
    const prevent =(e)=>{
        e.preventDefault(e)
        
    }
    const submitHandler = ()=>{
         todos.map((todo)=>{
            firebase.firestore().collection('projects').doc(project).collection('todos').add({
                "todos": todo.name,
                "compete": false
           })
           
        })
        firebase.firestore().collection('projects').doc(project).set({
            imageurl: ''
        }).catch(function(err){
            console.log(err)
        }).then(()=>{
            setTodos([{'name': ''}])
            setProject('')
        })
    }
    return(
        <div>
            <form onSubmit= {(e)=> prevent(e)}>
            { todos.map((todo,idx)=>(
                <div key = {idx}>  
                <input name = 'project' value={todo.name} onChange={(e) => {projectHandler(idx,e)}}/>
                <button onClick={() => {deleteHandler(idx)}}>delete</button>
                </div>
             ))}
             <button onClick= {addHandler}>add field</button>
             <button onClick= {() =>{submitHandler()}}>submit</button>
             </form>
           <div>
           </div>
        </div>  
    )
};
export default AddProjectDetails