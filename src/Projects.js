import React, {Component} from 'react';
import Typist from 'react-typist';
import ProjectList from './ProjectList.json';

const projectData = ProjectList.projects.map((item) => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
            <div className="card text-center" >
                    <div className="card-body">
                    <h5 className="card-title"><b>{item.title}</b></h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <a target="blank" style={{marginRight:10}} 
                    href={item.source} className="btn btn-outline-success cardbtn">source !</a>
                    <a target="blank" 
                    href={item.demo} className="btn btn-outline-success cardbtn">demo !</a>
                </div> 
            </div>
        </div>
    );
})

class Posts extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            isTypingDone : false
        }
        this.handleTyping = this.handleTyping.bind(this);
    }
    
    handleTyping() {
        console.log("Getting repositories");
        setTimeout(() => {
            this.setState ({
                isTypingDone : true
            })
        },500) 
    }

    render() {
        if(this.state.isTypingDone) {
            return (
                <div className="row">
                    {projectData}
                </div>
            )
        }

        

        return(
            <div className="row" style={{paddingLeft: 20}}>
                <div>
                    <p id="terminal">
                        meanMachine
                        <span className="special">@</span>
                        prof 
                        <span className="special">~ $&nbsp;</span>
                    </p>
                </div>
                <Typist onTypingDone={this.handleTyping} startDelay={500} className="terminalText">
                    <i>get </i>
                    repos --all &amp;&amp; <i>echo </i> 
                    repos
                </Typist>
            </div>
        )

        
    }
}

export default Posts;