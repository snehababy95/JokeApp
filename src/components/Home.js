import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed : false
        }
    }

    setButtonState = () => {
        this.setState({
            buttonPressed : true
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className = 'heading'>LET'S TRY TO MAKE YOU LAUGH!!</h1>
                <Link to = {{
                    pathname : '/jokepage',
                }}>
                <button className = 'button' type ='submit' id='ok'> Try Me! </button>
                </Link>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        joke : state.joke
    }
}
export default connect(mapStateToProps)(Home);