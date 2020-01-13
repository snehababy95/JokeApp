import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../redux/middleware/jokesMiddleware';
import { Link, Redirect } from 'react-router-dom';
import './JokePage.css'
class JokePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
         }
    }
    componentDidMount () {
        console.log(this.props.joke);
                this.props.fetchJokes();
    }
    getJokes = () => {
        this.props.fetchJokes();
        this.setState({
            counter : this.state.counter + 1
        })
    }
     render() {
         console.log(this.props.joke.content);
        return (
            <div className = 'jokeContainer' >
                <h1 className = 'jokeBox'>{this.props.joke.content}</h1>
                <h5 className = 'subtitle'> Its OK, If u have not laughed yet!</h5>
                <button className = 'nextButton' type='submit' onClick = {this.getJokes}> Try another </button>
                {
                    this.state.counter === 6 &&
                    <Redirect to= '/winner' />
                }
            </div>
          );
    }
}

const mapStateToProps = (state) => {
    return{
        joke : state.joke
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchJokes : () => { dispatch(fetchJokes())}
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(JokePage);
