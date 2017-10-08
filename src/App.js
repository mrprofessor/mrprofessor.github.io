import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
        this.myCallback = this.myCallback.bind(this); 
    }
    componentDidMount() {
        let url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mrprofessor%2F";
        fetch(url)
            .then( (response) =>{
                return response.json();
            })
            .then( (data) => {
                this.setState({
                    isLoading: false,
                    postData: data.items,
                    isDone: false
                })
            })
            .catch((error) => {
                console.error(error); //set state to bad
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
        if(!this.state.isLoading && this.state.isDone) {
            return (
                <div className="container">
                    <Header myCallback={this.myCallback}/>
                    <Menu posts={this.state.postData} />
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