import React, { Component } from 'react';
import Feed from 'rss-to-json'
import Header from './Header';
import Menu from './Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPostLoading: true,
            isProjectLoading: true
        }
        this.myCallback = this.myCallback.bind(this); 
    }
    componentDidMount() {
        Feed.load('https://medium.com/feed/@mrprofessor', function(err, rss){
            console.log(rss);
        });
        // fetch posts
        let postURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mrprofessor%2F";
        fetch(postURL)
            .then( (response) =>{
                return response.json();
            })
            .then( (data) => {
                this.setState({
                    isPostLoading: false,
                    postData: data.items,
                    isDone: false
                })
            })
            .catch((error) => {
                console.error(error); //set state to bad
            });
        
        // Fetch projects
        let projectURL = "https://mrprofessor.github.io/api/projectList/projectList.json";
        fetch(projectURL)
            .then( (response) => {
                return response.json();
            })
            .then( (data) => {
                this.setState({
                    isProjectLoading: false,
                    projectData: data.projects,
                    isDone: false
                })
            })
            .catch((error) => {
                console.error("Can't load projects.");
            });
    }
    myCallback(menu) {
        setTimeout(() => {
            this.setState({
                isDone : menu
            })
        }, 500)
        
        // console.log(this.state.isDone);
        // return menu;
    }
    
    render() {
        // console.log(this.myCallback);
        if (!this.state.isPostLoading && !this.state.isProjectLoading && this.state.isDone) {
            return (
                <div className="container">
                    <Header myCallback={this.myCallback}/>
                    <Menu posts={this.state.postData} projects={this.state.projectData} />
                </div>
            )
        }
        return (
            <div className="container">
                <Header myCallback={this.myCallback}/>
                {/* <Menu posts={this.state.postData} /> */}
            </div>
        )
    }
}

export default App;