import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {

    render() {
        const { match, posts } = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id == id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === { id })
       if(this.props.loading === true){
           return <div className="loader">
               ...loading
           </div>
       }else{
       return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index} />
            <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id} />
        </div>
       }
    }
}

// Single.propTypes = {
//     params: PropTypes.array.isRequired,
// }
export default Single