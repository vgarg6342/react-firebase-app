import React,{useContext} from 'react'
import {ProjectContext} from './ProjectContext'

function CreateProject(){
    const[project,setProject] = useContext(ProjectContext)
    const projectHandler =(e)=>{
        setProject(e.target.value)
    }
    const addProject = (e)=>{
        e.preventDefault()
    }
    return(
        <div>
                <form onSubmit = {addProject}>
                    <input name = 'project' value={project} onChange={projectHandler}/>
                </form>
            </div>
    )

};
export default CreateProject