import React, {Component} from 'react';
import Typist from 'react-typist';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTypingDone : false
        }
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping() {
        console.log("Getting posts");
        setTimeout(() => {
            this.setState ({
                isTypingDone : true
            })
        },500) 
    }

    render() {
        let postData = this.props.test.posts.map((item) => {
            return (
                <div className="card text-center" key={item.guid}>
                    <div className="card-body">
                        <h4 className="card-title">{item.title.replace(/&amp;/g, '&')}</h4>
                        <a target="blank" href={item.link} className="btn btn-outline-success cardbtn">read !</a>
                    </div> 
                </div>
                );
        });
        if(this.state.isTypingDone) {
            return(
                <div>
                    {postData}
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
                <Typist onTypingDone={this.handleTyping} startDelay={1000} className="terminalText">
                    <i>get </i>
                    posts --all &amp;&amp; <i>echo </i> 
                    posts                         
                </Typist>
            </div>
        )        
    }
}

export default Posts;

