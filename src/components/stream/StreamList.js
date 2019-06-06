import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom';
class StreamList extends Component{

    componentDidMount(){
       this.props.fetchStreams()
    }

    renderButton = (stream)=>{
        if(stream.userId === this.props.currentUserId){
            return (
                <div>
                    <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary btn-sm mg">Edit</Link>
                    <button className="btn btn-danger btn-sm mg">Delete</button>

                </div>
            )
        }
    }

    renderCreateButton = ()=>{
        if(this.props.isSignedIn){
            return (
                <Link to="/streams/new" className="btn btn-dark btn-sm">
                  Create Stream
                </Link>
            )

        }
    }

    renderList = ()=>{
        return(
            this.props.streams.map((stream)=>{                
                return (  
                    <div className="card" key={stream.id}>
                    <div className="card-header">
                    <Link to={`/streams/${stream.id}`}>
                    {stream.title}
                    </Link>
                    </div>
                    <div className="card-body">{stream.description}</div> 
                    <div className="card-footer">{this.renderButton(stream)}</div>
                    </div>
                     )
               
             
         })
         
        )  
       
    }

    render(){
        return(
            <div>
                <div>{this.renderList()}</div>
                <div>{this.renderCreateButton()}</div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)