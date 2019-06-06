import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component{


    renderError = ({error, touched})=>{

        if(touched && error){
            return(
                <div>
                    {error}
                </div>
            )
        }

    }

    renderInput = ({input, label, meta})=>{
        return(
            <div className="form-group">
            <label>{label}</label>
             <input className="form-control" {...input} autoComplete="off"/>
             <div>{this.renderError(meta)}</div>
             </div>
        )
    }

    onSubmit = (formValues)=>{
            this.props.onSubmit(formValues)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate =(formValues)=>{
    const error={}
    if(!formValues.title){
        error.title ="You Must Enter A Valid Title"
    }

    if(!formValues.description){
        error.description = "You Must Enter A Valid Description "
    }
    return error
}

export default reduxForm({
    form:'streamForm',
    validate
})(StreamForm);

