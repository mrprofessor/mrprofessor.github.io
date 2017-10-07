import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }

        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        let url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mrprofessor%2F";
        // this.fetch = this.fetch.bind(this);
        fetch(url)
            .then( (response) =>{
                return response.json();
            })
            .then( (data) => {
                this.setState({
                    isLoading: false,
                    postData: data.items
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if(this.state.isLoading) {
            return (
                <div className="container">
                    <Header />
                    
                </div>
            )
        }
        return (
            <div className="container">
                <Header />
                <Menu posts={this.state.postData}/>
            </div>
        )
    }
}

export default App;