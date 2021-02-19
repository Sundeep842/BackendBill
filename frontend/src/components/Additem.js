
import { Modal, Button } from "react-bootstrap";
import {setState,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CART_ADD_ITEM } from "../reducers/cart";



export default function Additem() {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const [item, setItem] = useState();
  const [price,setPrice]=useState()
  const cart = useSelector(state => state)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setItems=(e)=>{  
//    console.log(cart)   
    setItem(e.target.value)  
  }
  const setPrices=(e)=>{
    //setState({...cart,price:10})
    setPrice(e.target.value)
    //console.log(e.target.value)
  }
  const Submit=(e)=>{

  e.preventDefault();
  const z={item,price}
  console.log(z)
//      setState(...cart,{price:10})
      dispatch({type:CART_ADD_ITEM,payload:z})
   //   dispatch({type:CART_ADD_PRICE,payload:price})


  console.log(cart)
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>
    <div className="add">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items">
            <form onSubmit={Submit}>
          <label>item</label>
          <input className="item" onChange={setItems} type="text"/><br/>
          <label>price</label>
          <input className="price" onChange={setPrices} type="text"/><br/>
          <Button variant="primary" onClick={Submit}>
            Add
          </Button>
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

