import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-indigo">Student Biodata</h1>
        <StudentForm />
        <StudentList />
      </div>
    </div>
  );
}

export default App;