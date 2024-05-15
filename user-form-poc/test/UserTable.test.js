import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserInfoForm from '../src/pages/UserInfoForm';
import UserTable from '../src/components/UserTable';
import "@testing-library/jest-dom";
import App from '../src/App'


test('edits user information', () => {
  const users = [{ firstName: 'John', lastName: 'Doe', employeeId: '123', country: 'USA' }];
  const setUsersMock = jest.fn();
  const setOpenFormMock = jest.fn();
  const { getByLabelText, getByText } = render(
    <UserInfoForm setUsers={setUsersMock} setOpenForm={setOpenFormMock} users={users} currUserEmpId="123" />
  );
  const firstNameInput = getByLabelText('First Name');
  fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
  const submitButton = getByText('Update');
  fireEvent.click(submitButton);
  expect(setUsersMock).toHaveBeenCalledWith([{ firstName: 'Jane', lastName: 'Doe', employeeId: '123', country: 'USA' }]);
  expect(setOpenFormMock).toHaveBeenCalledWith(false);
});

test('deletes user', () => {
    const users = [{ firstName: 'John', lastName: 'Doe', employeeId: '123', country: 'USA' }];
    const setUsersMock = jest.fn();
    const setCurrUserEmpIdMock = jest.fn();
    const { getByText } = render(
      <UserTable users={users} setUsers={setUsersMock} setCurrUserEmpId={setCurrUserEmpIdMock} />
    );
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(setUsersMock).toHaveBeenCalledWith([]);
  });

  test('renders user table', () => {
    const users = [{ firstName: 'John', lastName: 'Doe', employeeId: '123', country: 'USA' }];
    const { getByText } = render(<UserTable users={users} />);
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('Doe')).toBeInTheDocument();
    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('USA')).toBeInTheDocument();
  });
//   test('opens and closes form', () => {
//     const setTableVisible = jest.fn();
//     const setOpenFormMock = jest.fn();
//     const { getByText } = render(<App />);
//     const addUserButton = getByText('Add User');
//     fireEvent.click(addUserButton);
//     expect(setOpenFormMock).toHaveBeenCalledWith(true);
//     const showUsersButton = getByText('Show Users');
//     fireEvent.click(showUsersButton);
//     expect(setTableVisible).toHaveBeenCalledWith(true);
//   });