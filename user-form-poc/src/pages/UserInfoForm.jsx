import { useState, useEffect } from "react";

const UserInfoForm = ({ setOpenForm, users, setUsers, currUserEmpId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [country, setCountry] = useState("");
    const buttonText = currUserEmpId==null?"Submit":"Update";
  let currentUser = null;
  const countries = ["India", "USA", "Australia", "England"];
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      employeeId: employeeId,
      country: country,
    };

    if (currUserEmpId) {
      const updatedUsers = users.map(user => {
        if (user.employeeId === currUserEmpId) {
          return newUser;
        }
        return user;
      });
      setUsers(updatedUsers);
    } else {
      setUsers([...users, newUser]);
    }

    setFirstName('');
    setLastName('');
    setEmployeeId('');
    setCountry('');
    setOpenForm(false);
  };
  useEffect(() => {
    if (currUserEmpId != null) {
      users.forEach((user) => {
        if (user.employeeId === currUserEmpId) {
          currentUser = user;
        }
      });
    }
    if(currentUser!=null){
        setFirstName(currentUser.firstName);
        setLastName(currentUser.lastName);
        setCountry(currentUser.country);
        setEmployeeId(currentUser.employeeId);
    }
  }, [users]);

  return (
    <div>
        <button className="outline-none bg-blue-600 rounded-md py-3 px-3 mt-3 text-white" onClick={()=>{setOpenForm(false)}}>Go Back</button>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            id="firstName"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            id="lastName"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="employeeId"
          >
            Employee ID
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            id="employeeId"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="country"
          >
            Country
          </label>
          <select
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            {countries.map((countryOption) => (
              <option key={countryOption} value={countryOption}>
                {countryOption}
              </option>
            ))}
          </select>
        </div>
        <button
          className="outline-none bg-blue-600 rounded-md py-3 px-3 mt-3 text-white"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;
