import './App.css';
import  Items from "./components/Items"
import  Mybills from "./components/Mybills"
import  Newbill from "./components/Newbill"
import  Sales from "./components/Sales"
import  AddQuantity from "./components/AddQuantity"


function App() {
  
  return (
  <div className="main">
    <AddQuantity/>
    <div className="main-comp">
    <div className="n-bill"><Newbill/></div>
    <div className="n-Items"> <Items/></div>
    <div className="n-bills"><Mybills/></div>
    <div className="n-sales"><Sales/></div>
    
    </div>
  </div>    
  );
}

export default App;
