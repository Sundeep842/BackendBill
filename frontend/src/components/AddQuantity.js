import { Modal, Button } from "react-bootstrap";
import { setState, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CART_ADD_QUAN } from "../reducers/cart";


export default function Additem() {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState();
    const m = useSelector(state => state)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setQuantitys = (e) => {
        //    console.log(cart)   
        setQuantity(e.target.value)
    }
    
    const Submit = (e) => {

        e.preventDefault();
        console.log(m)

        //      setState(...cart,{price:10})
        dispatch({ type: CART_ADD_QUAN, payload: quantity })


    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Quantity
      </Button>
            <div className="add">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="items">
                            <form onSubmit={Submit}>
                            {console.log(m)}
                                <label>{m.cart.item}</label><br/>
                                <label>Quantity</label>
                                <input className="price" onChange={setQuantitys}  type="text" /><br />
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

