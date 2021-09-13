import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {request as handlingRequestFrom8base} from 'graphql-request';
import {NOTES_LIST_QUERY} from 'shared/graphql';
import {WORKSPACE_ENDPOINT} from 'shared/constants';

export const Tasks = () =>
{
    const [state, setState] = useState([]);  

    useEffect(() => 
    {
      const data = handlingRequestFrom8base(WORKSPACE_ENDPOINT, NOTES_LIST_QUERY);
      data.then(req =>
        {
          setState(req.notesList.items);
        });
      }, [])
      
      console.log(state);


  return(
    <>
    <h1 className="text-center">Tasks List</h1>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Users</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {state.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
            <td>{row.users.email}</td>
            <td>{row.completed}</td>
          </tr>
        ) )}
      </tbody>
    </Table>
    </>
  )
}