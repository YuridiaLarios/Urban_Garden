import React, { Component } from 'react';
// import { FaLemon } from 'react-icons/fa';
import Moment from 'react-moment';
import './Profile.css';
import axios from 'axios'

// import '../src/styleCss/styles'


// function (user, context, callback) {
//   var namespace = 'https://my-domain.my-company.com/';
//   if (context.idToken && user.user_metadata) {
//     context.idToken[namespace + 'user_metadata'] = user.user_metadata;
//   }
//   if (context.idToken && user.app_metadata) {
//     context.idToken[namespace + 'app_metadata'] = user.app_metadata;
//   }
//   callback(null, user, context);
// }



class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {}
    }
  }
 

  componentWillMount() { //mounting profile
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      // console.log(profile.user_metadata)
      this.setState({ profile: userProfile});
     // document.getElementById('picture').textContent = userProfile.user_metadata
    
      console.log({userProfile},'cool user profile from Profile page')
    }
  }

 

  postingToDB = () => { //CHISOM HELPED
  
  const { getProfile } = this.props.auth;
  const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
  console.log(this.props.auth.accessToken)
 
    getProfile((err, profile) => {
      console.log(profile + "its not posting")
      if(err){
        console.log(err)
      } else {
        //document.getElementById('picture').textContent = profile.user_metadata
        console.log(profile)
        axios({
          method: 'POST',
          headers,
          url: 'http://localhost:3005/usersdata',
         data: profile
        })
      }
    });
  }

  // auth0.client.userInfo(authResult.accessToken, function(err, user) {
  //   // Now you have the user's information
  //   console.log(auth.client.userInfo)
  //   console.log(authResult.accessToken)
  // });


  render() {
    const { profile } = this.state;
    return (
      <div className='container'>

      <header className='row profile-area'>
            
              <div className='col-sm-8'>
                <img src={profile.picture} alt='profile' style={{width: '50%'}}/> 
              </div>
              <div className='col-sm-4' alt='last sign in' style={{marginTop: '5%'}}> 
              <Moment 
                     //Displays from a library called moment to change display of date/time 
                        date={profile.updated_at}
                        parse={profile.updated_at}
                        format='MMM-D'
                        />
                    </div>

            {/* json string */}
            <button onClick={this.postingToDB} auth={this.props.auth}>posting user button</button>

            {/* <pre>{JSON.stringify(profile, null, 2)}</pre>   */}
          </header>
        <hr/>
        
      </div>
    );
  }
}


export default Profile;
