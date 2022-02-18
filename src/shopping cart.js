//import logo from './logo.svg';
import React,{useState} from 'react';
//import {component} from 'react';
import './App.css';


function App() {
  
  const dresses=[
    {
    image:'https://www.stylesgap.com/wp-content/uploads/2014/03/Latest-Party-wear-Fancy-Formal-Dresses-Collection-for-women-by-Jannat-Nazir-2014-2015-7.jpg',
    name:"Fancy Anarkali Party Wear",
    price:"$40.0"
    },
    {
    image:'https://i.pinimg.com/originals/74/46/39/74463925d3ca0583d1907af5537db680.jpg',
    name:"Fancy Dress Party Wear",
    price:"$45.0"
    },
    {
      image:'https://m.media-amazon.com/images/I/51QczMuHPdL._UL1024_.jpg',
      name:"Long Frock Party Wear",
      price:"$42.0"
      },
      {
        image:'https://sc04.alicdn.com/kf/H1bdcd3b7712f4f00b4392bca4fd28eb9c.jpg',
        name:"Fancy Kurti Party Wear",
        price:"$48.0"
        },
        {
          image:'https://image.winudf.com/v2/image/Y29tLnJpdm8uZ2lybHMucGFydHlkcmVzc19zY3JlZW5fMV8xNTI0NDI2NDQ2XzA4Mw/screen-1.jpg?fakeurl=1&type=.jpg',
          name:"Ladies Party Wear",
          price:"$40.0"
          },
          {
            image:'https://i.pinimg.com/originals/83/46/40/8346405740d11adcf8cffdd45f06dc15.png',
            name:"Fancy Lehenga Party Wear",
            price:"$40.0"
            },
  

  ];
 
  
  return (
    
    <div className="App">
      <br>
      </br>
      <div className='cart'><p align="right"><button>Shopping Cart
        <span class="glyphicon glyphicon-shopping-cart"> </span> </button>
        </p>
        </div>
        <br></br>
      <section className='dress-list'>
      {dresses.map((dress)=>(
        <Cart
        image={dress.image}
        name={dress.name}
        price={dress.price}
        
        />
        )
      )}
      </section>
      
    </div>
 
  );
}

export default App;

function Cart({image,name,price}){
  const [search, setSearch] = useState(0);
 
  return(
    
    <div className='dress'>
     
      <img src={image}
      alt='Dress'
      className='dress-image'
      />
      <div className='dress-desc'>
      <h3 className='dress-name'>{name}</h3>
      <h3 className='price'>{price} </h3>
      
      </div>
      <button class="button" onClick={()=>setSearch(search + 1)}>
       Add To Cart{search}</button>
      
     
    </div>

  );
}

//setSearch(search + 1)
//onClick={()=>addToCart(dress)}