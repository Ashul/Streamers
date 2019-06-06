import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'713321240017-2fnojcurk5psv5amkf3tm369j2au4m5u.apps.googleusercontent.com',
                scope:'email'
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.OnAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.OnAuthChange)
            })
        })
    }

    OnAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }

    }
    trySignInClick = ()=> {
        this.auth.signIn();
    }

    trySignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return <div>I don't Know if i'm signed in</div>
        }
        else if(this.props.isSignedIn){
            return (
            <button type="button" className="btn btn-danger btn-sm" onClick={this.trySignOutClick}>Sign out</button>)

        }
        else{
            return (
                <button type="button" className="btn btn-danger" onClick={this.trySignInClick}>Sign in with google</button>)

            
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)