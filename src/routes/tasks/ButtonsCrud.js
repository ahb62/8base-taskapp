import React, {useState, useEffect} from "react";
/* The modal components for the CRUD */
import {ModalCreate} from "./ModalCreate";
import {ModalUpdate} from "./ModalUpdate";
import {ModalDelete} from "./ModalDelete";
/* React-Bootstrap components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ButtonsCrud = () => 
{
    const [createModalShow, setCreateModalShow] = useState(false);
    const [updateModalShow, setUpdateModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    return(
        <>
            <Container>
                <Row size="lg">
                    <ButtonGroup size="sm">
                        <Button onClick={() => setCreateModalShow(true)} variant="success">Create</Button>
                        <ModalCreate show={createModalShow} onHide={() => setCreateModalShow(false)} />

                        <Button onClick={() => setUpdateModalShow(true)} variant="primary">Update</Button>
                        <ModalUpdate show={updateModalShow} onHide={() => setUpdateModalShow(false)} />

                        <Button onClick={() => setDeleteModalShow(true)}variant="danger">Delete</Button>
                        <ModalDelete show={deleteModalShow} onHide={() => setDeleteModalShow(false)} />
                    </ButtonGroup>
                </Row>
            </Container>
        </>
    )
}