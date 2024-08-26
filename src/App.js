import {Button, Container} from"react-bootstrap"
import NavBar from "./componant/nav.js"
import Header from "./componant/Header.js";
import Categore from "./componant/Categore.js";
import Item from "./componant/Item.js";
import item from "./componant/data.js";
import { useState } from "react";


function App() {
  let [data,setdata]=useState(item)
  const allCategore=["الكل",... new Set(item.map((item)=>item.categore))]
  
  let filterData=(cat)=>{
    if(cat=="الكل"){
      setdata(item);
    }
    else{
      let newArray=item.filter((item)=>item.categore==cat)
      setdata(newArray)

    }

  }
  const filterBySearch =(word)=>{
    if(word!=""){
      const searchArray =item.filter((item)=>item.title==word)
      // console.log(searchArray)
        setdata(searchArray);

    }
  
  }
  return (
   <div>
    <NavBar filterBySearch={filterBySearch}></NavBar>
    <Container>
      <Header></Header>
      <Categore filterData={filterData} allCategore={allCategore}></Categore>
      <Item data={data}></Item>
     
    </Container>
    
   </div>
  );
}

export default App;
