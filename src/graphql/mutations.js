export const createStudent = /* GraphQL */ `
  mutation CreateStudent($input: CreateStudentInput!) {
    createStudent(input: $input) {
      id
      firstName
      lastName
      dateOfBirth
      email
      phone
    }
  }
`;

export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent($input: DeleteStudentInput!) {
    deleteStudent(input: $input) {
      id
    }
  }
`;