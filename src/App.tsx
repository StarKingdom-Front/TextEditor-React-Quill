import React, { useState } from 'react';
import './App.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false]}],
    ["bold", "italic", "underline", "blockquote"],
    [
      {list: 'ordered'},
      {list: 'bullet'},
      {indent: '-1'},
      {indent: '+1'},
    ],
    ['link'],
  ]
}

function App() {

  const [value, setValue] = useState('');
  const [results, setResult] = useState('');

  const [arr, setArr] = useState([''])


  const result = arr.map((element, index) => {
    if(element === '') {
      return 'Result'
    } 

    return <div className='editor result'>
    <ReactQuill key={index}
      theme={'snow'}
      value={element} 
      onChange={setResult}
      className='editor-input my-editing-area'
      modules={modules}
      defaultValue={element}
      
    />
    
</div> 

 });

 console.log(result)

 function add() {
  setArr([...arr, value]);
}


  return (
    <div className="container">
      
        <div className='row'>
          <div className='editor'>
            <ReactQuill 
              theme='snow' 
              value={value} 
              onChange={setValue}
              className='editor-input'
              modules={modules}
              placeholder='Enter text'
            />
          </div>

          <div className='preview' >
              {value}
          </div>
        </div>

        <div style={{marginTop: '50px'}}>
          <div className='submit' onClick={add}>Submit</div>
        </div>

        <div className='text' dangerouslySetInnerHTML={{ __html: value}}>
        </div>
        {result}
    </div>
  );
}

export default App;
