import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import News from './components/News';
const url= 'https://hn.algolia.com/api/v1/search?query='

class App extends React.Component {
  constructor(){
    super();
    this.state={
      news:[],
      inputValue:''
    }
  }
  handleSubmitBtn=()=>{
    fetch(`${url}${this.state.inputValue}`)
    .then(res=>res.json())
    .then(data=>this.setState({news:data.hits}))
  }
  handleInputChange=(event)=>{
    this.setState({inputValue:event.target.value})
  }
  render(){
    console.log(this.state.news)
    return (
      
      <div className="App">
        <Header/>
        <input type='type' placeholder='Search...' value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleSubmitBtn} className='searchBtn'>Search</button>
        <ul className='news-wrapper'>
          {this.state.news.map(item=> <News title={item.title} author = {item.author} url= {item.url}/>)}
        </ul>
        
      </div>
    );

  }

}

export default App;
