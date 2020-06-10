import React, {useState,createContext} from 'react'

export const ProjectContext = createContext()

export function ProjectProvider(props){
    const[project,setProject]= useState('')
    const[todos,setTodos]= useState([{'name': ''}])
    
    return(
        <ProjectContext.Provider value = {[project,setProject,todos,setTodos]}>
            {props.children}
        </ProjectContext.Provider>
    )

}
