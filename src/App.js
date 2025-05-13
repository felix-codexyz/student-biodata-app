import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Student Biodata Management</h1>
        <StudentForm />
        <StudentList />
      </div>
    </div>
  );
}

export default App;