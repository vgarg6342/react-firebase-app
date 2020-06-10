import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

function ProjectDis(match) {
  const[objects, setObject] = useState([])
  useEffect(() =>{
      console.log(match.match.params.id)
    firebase.firestore().collection('projects').doc(match.match.params.id).collection('todos')
    .onSnapshot((snapshot) => {
        const getObject = snapshot.docs.map((doc) =>({
            id: doc.id ,
        ...doc.data()
        }))
        setObject(getObject)  
    }) 
    },[])
    
    const completeHandler=(id,val)=>{
        firebase.firestore().collection('projects').doc(match.match.params.id).collection('todos').doc(id).update({
            'complete': val
        })
    }
  return (
    <div >
      <h1>PROJECT-{match.match.params.id}</h1>
      <h2> task to complete</h2>
        {objects.map(object =>(
            <form  key= {object.id} >
            <div >
            <p>{object.todos}</p>
                <input type = 'checkbox' name= 'complete' defaultChecked={object.complete} onChange= {() =>{completeHandler(object.id,!object.complete)}} />
            </div>
            </form>
        )
        )}     
    </div>
  );
}

export default ProjectDis;

