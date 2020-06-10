import React,{useEffect,useState} from 'react'
import firebase from '../firebase'
import {Link} from 'react-router-dom'


function FrontPage() {

    const[projects,setProject] = useState([])
    useEffect(() =>{
        firebase.firestore().collection('projects')
        .onSnapshot((snapshot) => {
            const getObject = snapshot.docs.map((doc) =>({
                id: doc.id ,
            ...doc.data()
            }))
            setProject(getObject) 
        }) 
    },[])

    return (
        <div>
            <h1>List of projects</h1>
             {projects.map((project)=>(
                 <div key ={project.id}>
                     <h2>
                         <Link to={`/project/${project.id}`}>
                     {project.id}

                        </Link>
                     </h2>
                 </div>
             ))}
        </div>
    )

}

export default FrontPage