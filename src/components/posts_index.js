import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
       return  _.map(this.props.posts, post => {
           const post_url = `/posts/${post.id}`
           return (
               <Link to={post_url}>
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                </Link>
       )
       })
    }

    render() {
        return (
            <div> 
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
             </div>
        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex)