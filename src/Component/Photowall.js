import React  from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photowall(props) {
    
    return <div>
        <Link className='addIcon' to='/AddPhoto'></Link>
    <div className="photo-grid">
            {props.posts
            .sort(function (x,y) {
                return y.id - x.id                
            })
            .map((posts,index) => <Photo key={index} post = {posts} {...props} index={index}  />)}
        </div>
        </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
}
export default Photowall