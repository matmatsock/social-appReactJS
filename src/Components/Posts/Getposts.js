import React, { useEffect,useState } from 'react';
import axios from 'axios';

export default function GetPosts() {
      const [postsData, setPostsData] = useState([]);
      const [latestPostDate, setLatestPostDate] = useState('');

      const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

      useEffect(() => {
            axios.post(
                  'https://akademia108.pl/api/social-app/post/latest', 
                  JSON.stringify({}),
                  { 'headers': headers }).then(res => {
                  console.log(res);
                  setPostsData(res.data);
                  setLatestPostDate(res.data[res.data.length - 1].created_at);
            });
      }, []);


      const getPosts = () => {
            axios.post(
                  'https://akademia108.pl/api/social-app/post/older-then', 
                  JSON.stringify({date: latestPostDate}),
                  { 'headers': headers }).then(res => {
              
                  setPostsData(posts=> {
                        return posts.concat(res.data);
                  });
                  setLatestPostDate(res.data[res.data.length - 1].created_at);
            });
      }


      console.log(latestPostDate);

      return (
            <>
            <ul>
                  {postsData.map(post => <li key={post.id}>{post.content} Likes {post.likes.length}</li>)}
            </ul>

            <button onClick={getPosts}>Get more</button>
            </>
      )

}