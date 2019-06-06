import React, { Component } from 'react';
import {connect} from 'react-redux';

import {editStrem} from '../../actions';

class StreamEdit extends Component{
    render(){
        console.log(this.props.streams)

        return(
            <div>
                <h3>Stream Edit</h3>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{

    return {streams:state.streams}
}

export default connect(mapStateToProps, {editStrem})(StreamEdit);