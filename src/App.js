import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import React,{useState} from 'react'
import Footer from './Components/Footer';
import AddItem from "./Components/AddItem";


function App() {
   const products = [
     {
       price: 99999,
       name: "Iphone 14 pro max",
       quantity: 0,
     },
     {
       price: 79999,
       name: "Iphone 14 pro",
       quantity: 0,
     },
     {
       price: 13999,
       name: "Iphone 15 pro Max ",
       quantity: 0,
     },
     {
       price: 15999,
       name: "Mi Note 10",
       quantity: 0,
     },
   ];

  const [productList, setProductList] = useState(products);
   const [totalAmount, setTotalAmount] = useState(0);


     const incrementQuantity = (index) => {
       let newProductList = [...productList];
       let newTotalAmount = totalAmount;
       newProductList[index].quantity++;
       newTotalAmount += newProductList[index].price;
       setTotalAmount(newTotalAmount);
       setProductList(newProductList);
     };

     const decrementQuantity = (index) => {
       let newProductList = [...productList];
       let newTotalAmount = totalAmount;
       if (newProductList[index].quantity > 0) {
         newProductList[index].quantity--;
         newTotalAmount -= newProductList[index].price;
       }
       setTotalAmount(newTotalAmount);
       setProductList(newProductList);
     };
  
 
     const resetQuantity = () =>{
        let newProductList = [...productList];
        newProductList.map((products)=>{
          products.quantity=0
        })
        setProductList(newProductList);
        setTotalAmount(0);
     };

     const removeItem =(index)=>{
      let newProductList = [...productList];
      let newTotalAmount = totalAmount;
      newTotalAmount -=newProductList[index].quantity * newProductList[index].price;
      newProductList.splice(index,1);
      console.log(newProductList)
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
     };

      const addItem = (name, price) => {
        let newProductList = [...productList];
        newProductList.push({
          price: price,
          name: name,
          quantity: 0,
        });
        setProductList(newProductList);
      };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
