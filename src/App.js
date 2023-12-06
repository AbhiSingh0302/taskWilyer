import { Button } from 'react-bootstrap';
import './App.css';
import TablePage from './TablePage';
import jsonData from "./user_records.json.json";
import { useState } from 'react';


function App() {
  const [page, setPage] = useState(1);
  const limit = 20;
  const data = jsonData.slice(limit*(page-1),limit*(page));
  console.log(jsonData.length);

  if(page<1 || page>(jsonData.length/limit)){
    setPage(1);
  }

  const postData = async () => {
    const response = await fetch("http://localhost:4500/api/items",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: JSON.stringify(data)
      })
    })
  }

  console.log(jsonData[0]);
  return (
    <div>
      <h1>Page Number: {page}</h1>
      <TablePage items={data}/>
      <Button onClick={() => setPage(prev => prev-1)}>Previous</Button>
      <Button onClick={() => setPage(prev => prev+1)}>Next</Button>
      <Button onClick={postData}>Send Data</Button>
    </div>
  );
}

export default App;
