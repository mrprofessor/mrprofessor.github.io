import React, {Component} from 'react';
import './Posts.css'

class Posts extends Component {
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
        
        return(
            <div>
                {str}
            </div>
        )
    }
}

export default Posts;

