import React from 'react'
import CreateObject from './CreateObject'
import ObjectList from './ObjectList'
function ToDo(match) {
    return (
        <div>
            <h1>create task</h1>
            <div>  
            <CreateObject collection={match.match.params.id} />
            </div>
            <div>
            <ObjectList collection={match.match.params.id}/>
            </div>
            <div>
            </div>
        </div>
    )
}
export default ToDo