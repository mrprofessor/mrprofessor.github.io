import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import './Menu.css';
import Posts from './Posts';
import Projects from './Projects';
import About from './About';

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )

// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )

// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//         </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//         </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//         </Link>
//             </li>
//         </ul>

//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )} />
//     </div>
// )

class Menu extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="nav nav-justified " id="menu">
                        <NavLink className="nav-item nav-link" to="/" exact activeClassName="active" >Posts</NavLink>
                        <NavLink className="nav-item nav-link" to="/projects" activeClassName="active" >Projects</NavLink>
                        <NavLink className="nav-item nav-link" to="/about" activeClassName="active" >About</NavLink>
                    </nav>

                    <br />

                    <Route exact path="/"  render={(props) => (<Posts test={this.props} />)} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}
export default Menu