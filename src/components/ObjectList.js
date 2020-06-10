import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

function ObjectList(props) {
  const[objects, setObject] = useState([])
  useEffect(() =>{
    firebase.firestore().collection(props.collection)
    .onSnapshot((snapshot) => {
        const getObject = snapshot.docs.map((doc) =>({
            id: doc.id ,
        ...doc.data()
        }))
        setObject(getObject)  
    }) 
},[])
  const deleteHandler = (id) =>{
    firebase.firestore().collection(props.collection)
    .doc(id).delete()
  }
  return (
    <div >
      <h1>{props.collection}</h1>
        {objects.map(object =>(
            <div key= {object.id}>
            <p>{object.task} in {object.time}</p>
            <button onClick={()=>{deleteHandler(object.id)}}>delete</button>
            </div>
        )
        )}     
    </div>
  );
}

export default ObjectList;
