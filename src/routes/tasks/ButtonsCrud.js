import React, {useState, useEffect} from "react";
/* React-Bootstrap components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
/* Graphql functions */


/* import {request} from 'graphql-request';
import {useMutation} from '@apollo/client';
import { ADD_NOTE_MUTATION } from "shared/graphql";
import {WORKSPACE_ENDPOINT} from 'shared/constants';

 */



export const ButtonsCrud = () => 
{
    return(
        <>
            <Container>
                <Row size="lg">
                    <ButtonGroup size="sm">
                        <Button variant="success">Create</Button>
                        <Button variant="primary">Update</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                </Row>
            </Container>
        </>
    )
}