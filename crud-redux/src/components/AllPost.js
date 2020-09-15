import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditComponent from './EditComponent'
import Post from './Post'
class AllPost extends Component {
    render() {
        return (
            <div>
                <h1  className="post_heading"> All Posts</h1>
                { this.props.posts.map( post =>  {
                    if(post.editing){
                       return <EditComponent key={post.id} post={post} />
                    }
                    return <Post key={post.id} post={post} />
                } ) }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps) (AllPost)
