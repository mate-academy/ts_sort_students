
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsArray = students.slice();

  function averageGrades(student: Student): number {
    return student.grades.reduce((acc, curr) => acc + curr, 0)
      / student.grades.length;
  }

  switch (sortBy) {
    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsArray.sort((a: Student, b: Student) => {
          return averageGrades(a) - averageGrades(b);
        });
      } else {
        studentsArray.sort((a: Student, b: Student) => {
          return averageGrades(b) - averageGrades(a);
        });
      }
      break;

    case SortType.Surname:
    case SortType.Name:
      if (order === 'asc') {
        studentsArray.sort((a: Student, b: Student) => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      } else {
        studentsArray.sort((a: Student, b: Student) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });
      }
      break;

    default:
      if (order === 'asc') {
        studentsArray.sort((a: Student, b: Student) => {
          return (+a[sortBy]) - (+b[sortBy]);
        });
      } else {
        studentsArray.sort((a: Student, b: Student) => {
          return (+b[sortBy]) - (+a[sortBy]);
        });
      }
      break;
  }

  return studentsArray;
}
