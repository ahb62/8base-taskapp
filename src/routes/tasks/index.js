import Table from 'react-bootstrap/Table';


export const Tasks = () =>
{
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
    <tr>
      <td>{`"id": "1"`}</td>
      <td>{`"query item": "title 1"`}</td>
      <td>{`"query item": "body 1"`}</td>
      <td>{`"query item": "User 1"`}</td>
      <td>{`"query item": "completed 1"`}</td>
    </tr>
    <tr>
      <td>{`"id": "2"`}</td>
      <td>{`"query item": "title 2"`}</td>
      <td>{`"query item": "body 2"`}</td>
      <td>{`"query item": "User 2"`}</td>
      <td>{`"query item": "completed 2"`}</td>  
    </tr>
    <tr>
      <td>{`"id": "3"`}</td>
      <td>{`"query item": "title 3"`}</td>
      <td>{`"query item": "body 3"`}</td>
      <td>{`"query item": "User 3"`}</td>
      <td>{`"query item": "completed 3"`}</td>
    </tr>
  </tbody>
</Table>
</>
    )
}