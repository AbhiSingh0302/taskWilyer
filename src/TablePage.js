import { Table } from "react-bootstrap"

const TablePage = (props) => {
    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.gender}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
        </tr>
      ))}
    </tbody>
  </Table>
}

export default TablePage;