import React from 'react';
import axios from 'axios';

export default class PutPost extends React.Component {
      state = {
            post: '',
      };

      handleChange = event => {
            this.setState({ name: event.target.value});
      };

      handleSubmit = event => {
            event.preventDefault();

            const post ={
                  name: this.state.name
            }
            axios.post(`https://akademia108.pl/api/social-app/post/add`).then(res => {
                  console.log(res);
                  console.log(res.data);
            })
      };

      render() {
            return (
                  <form onSubmit={this.handleSubmit}>
                        <label>
                        Użytkownik:
                        <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Dodaj</button>
                  </form>
            );
      }
}