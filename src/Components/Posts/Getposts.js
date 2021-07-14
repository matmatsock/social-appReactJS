import React from 'react';
import axios from 'axios';

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
                        { this.state.postdata.map(post => <li key={post.id}>{post.name}</li>)}
                  </ul>
            )
      };
}