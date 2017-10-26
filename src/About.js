import React, { Component } from 'react';
import Typist from 'react-typist';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTypingDone : false
        }
        this.handleTyping = this.handleTyping.bind(this);
    }
    handleTyping() {
        console.log("echo profile");
        setTimeout(() => {
            this.setState ({
                isTypingDone : true
            })
        },500) 
    }
    
    render() {
        if(this.state.isTypingDone) {
            return(
                <div>
                    <h1 className="text-muted">about</h1>
                    <p>
                        I am an individual(debatable) from planet Earth with humongous curiosity in technology and 
                        practically zero talent.I love to code as long as I know how to solve the problem and beyond 
                        that I run to StackOverflow guys.Yeah I am a software developer (yeah.. that means I edit excel 
                        sheets most of the time at work) and my buddies call me <kbd>prof</kbd>.
                    </p>
                    <p>
                        It all started in my 7th grade when I first watched Matrix.I really wanted to be a bullet 
                        dodging hacker.I should have taken the blue pill…well that’s past.Then like all other kids 
                        I started playing games and planned to build one someday(failed terribly).By following NEVER 
                        GET DOWN mantra I graduated as a <kbd>computer science engineer</kbd> and settled for an entry level 
                        developer job in an outsourcing company.Gotta find Oracle ASAP..huh!
                    </p>
                    <p>
                        While I am not at a WorkStation I am probably sleeping or playing cricket.
                    </p>
                    <p>
                        You can find me on <code><a target="blank" href="https://twitter.com/ThisIsRudra">Twitter</a></code>
                        , on <code><a target="blank" href="https://github.com/mrprofessor">GitHub</a></code> or at my cubicle.
                    </p>

                    <h2 className="text-muted">credits</h2>
                    <p>
                        All goes to me.
                    </p>
                    <p>
                        Kidding...This site was built with the amazing <code><a target="blank" href="https://reactjs.org">react</a>
                        </code> , inspired by the bloody IBM mainframe screen and proudly hosted on <code>
                        <a target="blank"href="https://github.com/">Github.</a></code>
                    </p>
                </div>
            );
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
                <Typist onTypingDone={this.handleTyping} startDelay={1000} className="terminalText">
                    <i>echo </i> profile.txt                         
                </Typist>
            </div>
        ) 

        
    }
}

export default About;