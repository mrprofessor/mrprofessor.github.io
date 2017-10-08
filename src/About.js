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
                    <h1 className="text-muted">About</h1>
                    <p>
                        Pok pok yr paleo scenester lumbersexual green juice. Pour-over post-ironic tempor, microdosing butcher jean shorts iPhone in seitan. Eiusmod slow-carb thundercats lorem commodo gluten-free. Green juice thundercats quis, yr nulla anim viral everyday carry selfies tempor kogi tbh. Beard venmo typewriter crucifix literally. Lomo chicharrones narwhal godard aliqua, affogato laborum mumblecore tumeric leggings deserunt pop-up. Selfies affogato lo-fi hoodie, taxidermy velit art party. Glossier raw denim actually you probably haven't heard of them. Everyday carry unicorn art party culpa air plant artisan trust fund pok pok activated charcoal.
                    </p>
                    <p>
                    Cat ipsum dolor sit amet, eum yet sit yet aute elit. Omnis duis. Tempor si enim. Proident odit. Odit. Enim consectetur, or exercitationem for esse or modi labore. Ipsa fugiat for minim ad. Nostrum eum. Iure quia magnam si anim et. Elit nostrum yet modi. Cillum ad vel for sed enim. Eu veritatis. Illo vitae nemo yet exercitation or architecto ab. 
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