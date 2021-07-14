import React from 'react';
import Axios from 'axios';

export default class TenPosts extends React.Component {
      state = {
            postsdata: [],
      };

      componentDidMount() {
            axios.get(`https://akademia108.pl/api/social-app/post/latest`).then(res => {
                  console.log(res);
            this.setState({ postsdata: res.data})
            });
      }

      render() {
            return (
                  <ul>
                        { this.state.postdata.map(post => <li>{post.name}</li>)}
                  </ul>
            )
      }
}