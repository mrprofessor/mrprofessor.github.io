import React, {Component} from 'react';
import Typist from 'react-typist';
import './Posts.css'

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
        this.setState ({
            isTypingDone : true
        })
    }
    render() {
        let str = this.props.test.posts.map((item) => {
            return (
                        <div className="card text-center" key={item.guid}>
                            <div className="card-body">
                                <h4 className="card-title">{item.title.replace(/&amp;/g, '&')}</h4>
                                <a target="blank" href={item.link} className="btn btn-outline-success">read !</a>
                            </div> 
                        </div>
                );
        });
        if(this.state.isTypingDone) {
            return(
                <div>
                    {str}
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
                <Typist onTypingDone={this.handleTyping} startDelay={1000} className="text">
                    <i>get </i>
                    posts --all &amp;&amp; <i>echo </i> 
                    posts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            
                </Typist>
            </div>
        )        
    }
}

export default Posts;

