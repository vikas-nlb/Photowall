import React, { Component } from 'react'
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import { removePost } from '../redux/actions'
import Single from './Single'




class Main extends Component {
  constructor() {
    super()

  }

  state = { loading :true}
  componentDidMount(){
    this.props.startLoadingPost().then(()=>{
      this.setState({loading:false})
    })
    this.props.startLoadingComments()
  }
  render() {
    return (

      <div>
        <h1>
          <Link to="/"> Photowall </Link>
        </h1>
        <Route exact path="/" render={() => (
          <div>
            <Photowall {...this.props} />
          </div>
        )} />
        <Route path="/AddPhoto" render={({ history }) => (
          <AddPhoto {...this.props} onHistory={history} />
        )} />
        <Route path="/single/:id" render={(params) => (
          <Single loading={this.state.loading}{...this.props} {...params} />
        )} />
      </div>
    )

  }
}
export default Main

//   import React, {Component} from 'react'
// import Title from './Title'
// import Photowall from './Photowall'
// import AddPhoto from './AddPhoto'
// import {Route} from 'react-router-dom'




// class Main extends Component{
//   constructor(){
//     super()
//     this.state = {
//       posts: [{
//         id: "0",
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//         }, {
//         id: "1",
//         description: "Aliens???",
//         imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//         }, {
//         id: "2",
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//         }],
//     }
//     this.removePhoto = this.removePhoto.bind(this);
//   }
//   removePhoto(postRemoved){
//     console.log(postRemoved);
//     this.setState((state) => ({
//       posts: state.posts.filter(post => post !== postRemoved)

//     }));
//   }
//   addPhoto(postSubmit){
//     this.setState(state => ({
//       posts: state.posts.concat([postSubmit])
//     }))
//   }

//     render(){
//       return <div>
//         <Route exact path = "/" render = {() => (
//           <div>
//         <Title title = {'Photowall'}/>
//         <Photowall posts = {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
//       </div>
//         )}/>

//         <Route path="/AddPhoto" render = {({history}) => (
//           <div>
//         <AddPhoto onAddPhoto ={(addedPost) => (
//           this.addPhoto(addedPost),
//           history.push('/')
//         )} />
//         </div>
//         )}/>



//       </div>

//     }
//   }
//   export default Main