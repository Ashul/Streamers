import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions'

class StreamShow extends Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    render(){
        
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        const {title, description} = this.props.stream
        return(
            <div>
                <h3>{title}</h3>
                <h6>{description}</h6>
            </div>
        )
    }
}
const matchStateToProps = (state, ownProps)=>{
   return{ stream:state.streams[ownProps.match.params.id]}
}
export default connect(matchStateToProps, {fetchStream})(StreamShow);