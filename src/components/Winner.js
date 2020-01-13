import React, { Component } from 'react';
import './Winner.css'
class Winner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() {
        return (
            <div className = 'mainContainer'>
<h2 className = 'congratsBox'>Congratulations!, U proved that you are a real Stone-Face!</h2>
<h5 className ='subtitle'>Nothing can make u LAUGH!</h5>
<h6 className = 'smile'>Atleast SMILE!</h6>
            </div>
         );
    }
}

export default Winner;