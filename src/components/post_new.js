import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form'

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
            <label>{field.label}</label>
                <input
                    type="text" 
                    className="form-control"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    render(){
        return (
            <form>
                <Field 
                    label="Title For Post" 
                    name="title" 
                    component={this.renderField} 
                />
                <Field 
                    label="Categories" 
                    name="categories" 
                    component={this.renderField} 
                />
                <Field 
                    label="Post Content" 
                    name="content" 
                    component={this.renderField} 
                />
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.title) {
        errors.title = "Enter a title that is at least 3 characters!"
    }
    if(!values.title) {
        errors.title = "Enter some categories"
    }
    if(!values.title) {
        errors.title = "Enter some content please"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)