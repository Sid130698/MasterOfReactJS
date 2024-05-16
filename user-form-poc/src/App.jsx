import { useState } from 'react';
import UserInfoForm from './pages/UserInfoForm';
import UserTable from './pages/UserTable';
import { useEffect } from 'react';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [currUserEmpId,setCurrUserEmpId] = useState();
  const handleOpenForm = ()=>{
    setOpenForm(!openForm);
  }
  const handleOpenTable = ()=>{
  setTableVisible(!tableVisible);
  }
  useEffect(()=>{
    if(currUserEmpId!=null){
      setTableVisible(false);
      setOpenForm(true);
    }
  },[currUserEmpId])
  return (
    <div className="flex justify-center mt-44 flex-col items-center">
      {!openForm && !tableVisible && <button className="outline-none w-48 bg-blue-600 rounded-md  m-5 py-3 px-3 "onClick={handleOpenForm}>Add User</button>}
      {openForm && !tableVisible && <UserInfoForm setOpenForm={setOpenForm} users={users} setUsers={setUsers} currUserEmpId={currUserEmpId}/>}
      {!openForm && !tableVisible && <button className="outline-none w-48 bg-blue-600 rounded-md m-5 py-3 px-3 "onClick={handleOpenTable}>Show Users</button>}
      {!openForm && tableVisible && <UserTable users={users} setUsers={setUsers} setCurrUserEmpId={setCurrUserEmpId} setTableVisible={setTableVisible}/>}
    </div>
  );
}

export default App;
