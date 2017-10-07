import React, { Component } from 'react';
import './Header.css'
import Typist from 'react-typist';

class Header extends Component {


    nextLine() {
        let str =  `<Typist >Night gathers, and now my watch begins.</Typist>`;
        return str;
    }
    render() {

        return(
            <div>
                <h1><Typist >Prof's home</Typist></h1>
                <Typist className="text">Night gathers, and now my watch begins.</Typist>
            </div>
            
        )
    }
}

export default Header;