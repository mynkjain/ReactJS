import React, { Component } from 'react'
import { connect } from 'react-redux'
class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data = {
            id: this.props.post.id,
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'UPDATE_POST',
            data
        })
    }
    render() {
        return (
            <div className="post">
                <form  className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" defaultValue={this.props.post.title} ref={(input)=> this.getTitle = input } placeholder="Enter Post Title" /> <br /> <br />
                    <textarea required rows="5" defaultValue={this.props.post.message} cols="28" ref={ input => this.getMessage = input } placeholder="Enter Post" /> <br /> <br />
                    <button>Update Post</button>  
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent)
