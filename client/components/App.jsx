import React from 'react';
import ListsContainer from './ListsContainer.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{border: '1px solid red'}}>
       <h1>Progress Lists</h1>
       <h2>Create new list button</h2>
       <ListsContainer />
     </div>);
  }
}
