import React, { useState } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dateOfBirth: '', email: '', phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.graphql({
        query: mutations.createStudent,
        variables: { input: formData },
      });
      setFormData({ firstName: '', lastName: '', dateOfBirth: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
      />
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
      />
      <button
        type="submit"
        className="w-full bg-teal text-white p-3 rounded-lg hover:bg-indigo transition-colors duration-300 font-semibold"
      >
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;