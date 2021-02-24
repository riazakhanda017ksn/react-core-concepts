import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';

function App() {
   
const nameArray=['Riaz', 'Moshiur', 'Kamal', 'Jamal', 'Tamal','kogir','jogir ahmed','lal tomato']
// const nameProfessional=['teacher', 'it ingineer', 'dancer', 'DJing', 'musicMaster']

    const product=[
      {name:'adopePhotoShop', price:'$ 99.99'},
      {name:'lightRom', price:'$ 89.99'},
      {name:'picSay', price:'$ 10.99'},
      {name:'picSay Pro', price:'$ 11.99'},
    
    ]    
    
    // const productName=product.map(product=>product)
    // console.log(productName);

    // const nameArrays=nameArray.map(Array=>Array
    //   )
    //   console.log(nameArrays);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <code>Hey, im react person</code>
          <Counter></Counter>
          <Users></Users>
          
         
       <ul>
         {
           nameArray.map(name=><li>{name}</li>)
         }
       {
        product.map(name=><li>{name.name}</li>)
       }
       </ul>
       {
         product.map(name=><Products name={name}></Products>)
       }
       <Products name={product[0]} ></Products>
        <Products name={product[1]} ></Products> 
        <Person name={'Riaz' } nameProfessional={"programmer"}></Person>
        <Person name={'amzad'} nameProfessional={'facebooking'}></Person>
        <Person  name={'moshiur'} nameProfessional={'wordpress'}></Person>
        <Person  name={'Nick'} nameProfessional={'EDM mixer'} ></Person>
       
        
 
      </header>
    </div>
  );
}


function Counter() {
  const [count,setCount]=useState(10);
  const buttonHandler =()=>setCount(count + 1)
  
  return(
    <div>
  <h1>
  Count:{count}
 
  </h1>
  
  <button onClick={()=>setCount(count - 1)}>decrease</button>
  <button onClick={()=>setCount(count + 1)}>increase</button>
    </div>
  )
  
}

function Users(){
const [users, setUser] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>setUser(data))
})
  return(
   <div>
     <h4>User Name : </h4>
     <ul>
   {
         users.map(user=> <li>{user.body}</li>)
   }
     </ul>
   </div>
  )
}

function Products(props){ 

const style={
  width:'200px',
  height:'200px',
  padding:'10px',
  margin:'10px',
  borderRadius:'10px',
  background:"#6274df",
  float:'left'
}
const {name,price}=props.name
return(
  <div style={style}>
    <h4>{name}</h4>
    <h5>{price}</h5>
   <button>buy now</button>
  </div>
)

}



function Person(props) {
  const edit={padding:"20px",margin:'10px'}
 return(
  <div style={edit}>
  <code>Write Your Name : {props.name}</code> <br/>
  <code>Whats your professional : {props.nameProfessional}</code>
</div>
 )
}
export default App;
