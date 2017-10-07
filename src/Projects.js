import React from 'react';
import './Projects.css'
import ProjectList from './ProjectList.json';

const projects = ProjectList.projects;

const Posts = () => {
    let projectData = projects.map((item) => {
        return(
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="card text-center" >
                        <div className="card-body">
                        <h5 className="card-title"><b>{item.title}</b></h5>
                        <p className="card-text text-muted">{item.description}</p>
                        <a target="blank" style={{marginRight:10}} 
                        href={item.source} className="btn btn-outline-success">source !</a>
                        <a target="blank" 
                        href={item.demo} className="btn btn-outline-success">demo !</a>
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