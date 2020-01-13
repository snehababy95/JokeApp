import React, { Component } from 'react';

class Winner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() {
        return (
            <div style = {{textAlign :'center'}}>
<h2>Congratulations!, U proved that you are a real Stone-Face!</h2>
<h5>Nothing can make u LAUGH!</h5>
<h6>Atleast SMILE!</h6>
            </div>
         );
    }
}

export default Winner;