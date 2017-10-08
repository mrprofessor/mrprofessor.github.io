import React, { Component } from 'react';
import './Header.css'
import Typist from 'react-typist';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subs : false
        }
        this.nextLine = this.nextLine.bind(this);
        this.nextMenu = this.nextMenu.bind(this);
    }

    nextLine() {
        this.setState({
            subs : true
        })
    }

    nextMenu() {
        this.setState({
            subs : true,
            menu: true
        })
        this.props.myCallback(this.state.menu);
        // console.log(this.props);
    }
    
    render() {
        // console.log(this.props);
        if(this.state.subs === true) {
            return(
                <div>
                    <h1><Typist >Prof's <span className="flash">blog</span></Typist></h1>
                    <Typist onTypingDone={this.nextMenu} className="text">Night gathers, and now my watch begins.</Typist>
                </div>
            )
        } 
        return(
            <div>
                <h1><Typist onTypingDone={this.nextLine}>Prof's <span className="flash">blog</span></Typist></h1>
            </div>
        )
        
        
    }
}

export default Header;