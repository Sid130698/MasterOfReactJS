import React from 'react'

const UserField = ({label,type="text"}) => {
    const countries = ["India", "USA" , "Australia", "England"]
  return (
    <div className="w-full">
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="name"
    >
     {label}
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type={type}
      placeholder={`Enter ${label}`}
      id="name"
    >
    { type=="select"?(
            countries.map((country)=>(<option key={country}>{country}</option>))
    ):null
    }
    </input>
    <p className="mt-1 text-xs text-gray-500">*This field is required</p>
  </div>
  )
}

export default UserField
