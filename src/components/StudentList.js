import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const result = await API.graphql({ query: queries.listStudents });
      setStudents(result.data.listStudents.items);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.graphql({
        query: mutations.deleteStudent,
        variables: { input: { id } },
      });
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="space-y-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold text-indigo">
              {student.firstName} {student.lastName}
            </h3>
            <p className="text-gray-600">{student.email}</p>
          </div>
          <button
            onClick={() => handleDelete(student.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;