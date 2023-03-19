import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie({handleMovie}) {
  const [show, setShow] = useState(false);
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [rating,setRate] = useState(0);
  const [date,setDate] = useState("");
  const [description,setDesc] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Desc" name='description' onChange={(e)=>setDesc(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Control type="number" max={5} min={1}  name='rating' onChange={(e)=>setRate(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Date</Form.Label>
        <Form.Control type="text" placeholder="Enter Date" name='date' onChange={(e)=>setDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Url Image" name='image' onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleMovie({name,image,rating,description,date,id:Math.random()}) ; handleClose()} }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie