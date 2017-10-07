import React from 'react';
import ProjectList from './ProjectList.json';


const projects = ProjectList.projects;


const Posts = () => {
    let projectData = projects.map((item) => {
        return(
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="card text-center" >
                        <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <a target="blank" href={item.source} className="btn btn-outline-success">read !</a>
                    </div> 
                </div>
            </div>
        );
    })
    return (
        <div className="row">
            {projectData}
        </div>
    )
}

export default Posts;