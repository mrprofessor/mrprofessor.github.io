import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './Menu.css';
import Projects from './Projects';

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

class Menu extends Component {
    // constructor(props) {
    //     super(props);

    //     // console.log(this.props.posts);
    // }
    
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav nav-justified " id="menu">
                        <li className="nav-item nav-link" ><Link to="/" >Posts</Link></li>
                        <li className="nav-item nav-link" ><Link to="/topics"  >Projects</Link></li>
                        <li className="nav-item nav-link" ><Link to="/about" >About</Link></li>
                    </nav>

                    <hr />

                    <Route exact path="/"  render={(props) => (<Projects test={this.props} />)} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }

}
export default Menu