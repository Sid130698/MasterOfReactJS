import { useState } from 'react';
import UserInfoForm from './pages/UserInfoForm';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const handleOpenForm = ()=>{
    setOpenForm(!openForm);
  }
  const handleOpenTable = ()=>{
  setTableVisible(!tableVisible);
  }
  return (
    <div className="flex justify-center mt-44 flex-col items-center">
      {!openForm && !tableVisible && <button className="outline-none w-48 bg-blue-600 rounded-md  m-5 py-3 px-3 "onClick={handleOpenForm}>Add User</button>}
      {openForm && !tableVisible && <UserInfoForm setOpenForm={setOpenForm} users={users} setUsers={setUsers}/>}
      {!openForm && !tableVisible && <button className="outline-none w-48 bg-blue-600 rounded-md m-5 py-3 px-3 "onClick={handleOpenTable}>Show Users</button>}
      {!openForm && tableVisible &&
    </div>
  );
}

export default App;
