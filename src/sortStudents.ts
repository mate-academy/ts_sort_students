
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'Name',
  Surname= 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  let newSortArrayWithStudents:Student[];

  switch (sortBy) {
    case 'Name':
      newSortArrayWithStudents = order === 'asc'
        ? [...students]
          .sort((prevStudent, nextStudent) => prevStudent.name
            .localeCompare(nextStudent.name))
        : [...students]
          .sort((prevStudent, nextStudent) => nextStudent.name
            .localeCompare(prevStudent.name));
      break;

    case 'Surname':
      newSortArrayWithStudents = order === 'asc'
        ? [...students]
          .sort((prevStudent, nextStudent) => prevStudent.surname
            .localeCompare(nextStudent.surname))
        : [...students]
          .sort((prevStudent, nextStudent) => nextStudent.surname
            .localeCompare(prevStudent.surname));
      break;

    case 'Age':
      newSortArrayWithStudents = order === 'asc'
        ? [...students]
          .sort((prevStudent, nextStudent) => prevStudent.age - nextStudent.age)
        : [...students]
          .sort((prevStudent, nextStudent) => {
            return nextStudent.age - prevStudent.age;
          });
      break;

    case 'AverageGrade':
      newSortArrayWithStudents = order === 'asc'
        ? [...students].sort((prevStudent, nextStudent) => {
          return prevStudent.grades
            .reduce((prev, inn) => prev + inn) / prevStudent.grades.length
          - nextStudent.grades
            .reduce((prev, inn) => prev + inn) / nextStudent.grades.length;
        })
        : [...students].sort((prevStudent, nextStudent) => {
          return nextStudent.grades
            .reduce((prev, inn) => prev + inn) / nextStudent.grades.length
            - prevStudent.grades
              .reduce((prev, inn) => prev + inn) / prevStudent.grades.length;
        });
      break;

    default:
      newSortArrayWithStudents = order === 'asc'
        ? [...students]
          .sort((prevStudent, nextStudent) => {
            return Number(prevStudent.married) - Number(nextStudent.married);
          })
        : [...students]
          .sort((prevStudent, nextStudent) => {
            return Number(nextStudent.married) - Number(prevStudent.married);
          });
  }

  return newSortArrayWithStudents;
}
