import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ModalDelete = (props) =>
{
    return(
        <>
            <Modal {...props} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Are you sure?</h5>
                </Modal.Body>

                <Modal.Footer centered>
                    <Button variant="danger">Yes</Button>
                    <Button variant="success">No</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
