import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ModalUpdate = (props) => 
{
    return(
        <>
        <Modal {...props} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            
            <Form>
                <Modal.Body>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control size="sm" type="text" />

                            <Form.Label>Body</Form.Label>
                            <Form.Control size="sm" type="text" />

                            <Form.Label>User</Form.Label>
                            <Form.Control size="sm" type="email" />
                        </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit">Update</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}