import React from 'react';
import Home from './component/Post';

function App() {
  const post = [
    {"id":0, "postname":"Anil", "post_description":"description1","img": "https://picsum.photos/200","author": "author1","date": "11/12/2016"},
    {"id":1, "postname":"anuj", "post_description":"description2","img": "https://picsum.photos/201","author": "author2","date": "12/12/2016"},
    {"id":2, "postname":"prathamesh", "post_description":"description3","img": "https://picsum.photos/202","author": "author3","date": "13/12/2016"},
    {"id":3, "postname":"pratik", "post_description":"description4","img": "https://picsum.photos/203","author": "author4","date": "14/12/2016"},
    {"id":4, "postname":"mayank", "post_description":"description5","img": "https://picsum.photos/204","author": "author5","date": "15/12/2016"},
    {"id":5, "postname":"maya", "post_description":"description6","img": "https://picsum.photos/205","author": "author6","date": "16/12/2016"},
    {"id":6, "postname":"prabha", "post_description":"description7","img": "https://picsum.photos/206","author": "author7","date": "17/12/2016"},
    {"id":7, "postname":"alex", "post_description":"description8","img": "https://picsum.photos/207","author": "author8","date": "18/12/2016"},
    {"id":8, "postname":"shradha", "post_description":"description9","img": "https://picsum.photos/208","author": "author9","date": "19/12/2016"},
    {"id":9, "postname":"krishna", "post_description":"description10","img": "https://picsum.photos/209","author": "author10","date": "20/12/2016"}
  ]
  return (
    <div>
      <p>This is App page</p>
      <Home title={post}></Home>
    </div>
  )
}

export default App


