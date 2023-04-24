import logo from './logo.svg';
import './App.css';
import BoilingVerdict from './component/BoilingVerdict';
import React, { createContext, useState } from 'react';
import Greeting from './component/Greeting';
import POST_LIST from './common/constant';

export const PostListContext = createContext();
function App() {
  const [celsius, setCelsius] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCelsius(inputValue);
  };

  
  const [name, setName] = useState('');

  const handleInputName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  }
  const [postList, setPostList] = useState(POST_LIST);
  return (
 
      <div>
      <label>Nhập vào độ C: </label>
      <input type="number" value={celsius} onChange={handleInputChange} />
      <BoilingVerdict celsius={celsius} />
      <label>Nhập vào tên của bạn: </label>
      <input type="text" value={name} onChange={handleInputName} />
      <Greeting name={name} />
    </div>
 
    
    
  );
};


export default App;


