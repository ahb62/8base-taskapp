import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';

import { ADD_NOTE_MUTATION } from "shared/graphql";
import {useMutation} from '@apollo/client';

export const ModalCreate = (props) => {

    const [state, setState] = useState({
        title: '',
        body: '',
        user: '',
        completed: ''
    });
    const handleChange = (element) =>
    {
        const value = element.target.value;
        setState({...state, [element.target.id]: value});
    }
    let title, body, user, completed;
    const [addNote, {data, loading, error}] = useMutation(ADD_NOTE_MUTATION, 
        {variables: {text: "placeholder", data: state}});
        
        if(error){console.log(error.message)};
        
        const handleSubmit = async (event) => 
        {
            event.preventDefault();
            console.log(addNote);
            console.log(data);
        console.log(`you create this: ${state.title}, ${state.body}, ${state.user}, ${state.completed}`);  



/*                 addNote({variables: {title: state.title, body: state.body, user: state.user, completed: state.completed}}); */
        console.log(state);
        
    }
    return(
        <>
        {loading ? (<h1>Loading...</h1>) : 
            (<Modal {...props} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                id="title"
                                name="title"
                                value={state.title}
                                ref={elementTitle => {title = elementTitle}}
                                size="sm" type="text" placeholder="Title of the task" onChange={handleChange} />
    
                                <Form.Label>Body</Form.Label>
                                <Form.Control
                                id="body"
                                name="body"
                                value={state.body}
                                ref={elementBody => {body = elementBody}}
                                size="sm" type="text" placeholder="Body of the task" onChange={handleChange} />
    
                                <Form.Label>User</Form.Label>
                                <Form.Control 
                                id="user"
                                name="user"
                                value={state.user}
                                ref={elementUser => user = elementUser}
                                size="sm" type="email"  placeholder="example@email.com" onChange={handleChange} />
    
                                <FormCheck 
                                id="completed"
                                name
                                ="completed"
                                value={state.completed}
                                ref={elementCompleted => completed = elementCompleted}
                                type="switch" onChange={handleChange}  label="Completed"/>
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">Create</Button>
                    </Modal.Footer>
                </Form>
            </Modal>)}
        </>    
    )
}