import React from 'react'
import AddprojectDetails from './AddProjectDetails'
import {ProjectProvider} from './ProjectContext'
import CreateProject from './CreateProject'

function Project(){
    return(
        <div>
            <ProjectProvider>
                <div>
                    <h1>add project name</h1>
              <CreateProject/>
                    <h1>add project details</h1>
              <AddprojectDetails/>
               </div>
            </ProjectProvider>
            
        </div>
    )

};

export default Project