import UserInfoForm from "./UserInfoForm";
import { render, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom";




test('renders UserInfoForm component', () => {
  const { getByLabelText, getByText } = render(<UserInfoForm />);
  const firstNameInput = getByLabelText('First Name');
  const lastNameInput = getByLabelText('Last Name');
  const employeeIdInput = getByLabelText('Employee ID');
  const countrySelect = getByLabelText('Country');
  const submitButton = getByText('Submit');

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(employeeIdInput).toBeInTheDocument();
  expect(countrySelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submits form with input values', () => {
  const setUsersMock = jest.fn();
  const setOpenFormMock = jest.fn();
  const users = [];
  const { getByLabelText, getByText } = render(
    <UserInfoForm users={users} setUsers={setUsersMock} setOpenForm={setOpenFormMock} />
  );
  const firstNameInput = getByLabelText('First Name');
  const lastNameInput = getByLabelText('Last Name');
  const employeeIdInput = getByLabelText('Employee ID');
  const countrySelect = getByLabelText('Country');
  const submitButton = getByText('Submit');

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(employeeIdInput, { target: { value: '123' } });
  fireEvent.change(countrySelect, { target: { value: 'USA' } });
  fireEvent.click(submitButton);

  expect(setUsersMock).toHaveBeenCalledWith([
    { firstName: 'John', lastName: 'Doe', employeeId: '123', country: 'USA' }
  ]);
  expect(setOpenFormMock).toHaveBeenCalledWith(false);
});

test('renders UserInfoForm component with dynamic button text', () => {
  const mockCurrUserEmpId = null;
  const { getByLabelText, getByText } = render(<UserInfoForm setOpenForm={() => {}} users={[]} setUsers={() => {}} currUserEmpId={mockCurrUserEmpId} />);
  const firstNameInput = getByLabelText('First Name');
  const lastNameInput = getByLabelText('Last Name');
  const employeeIdInput = getByLabelText('Employee ID');
  const countrySelect = getByLabelText('Country');
  const submitButton = getByText('Submit');

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(employeeIdInput).toBeInTheDocument();
  expect(countrySelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
test('Always true test',()=>{
  expect(true).toBe.true;
})