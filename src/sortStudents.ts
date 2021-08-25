// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const reducer = (a: number, b: number): number => a + b;

  switch (sortBy) {
    case 'name':
    case 'surname':
      if (order === 'asc') {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        });
      } else {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        });
      }
      break;
    case 'age':
      if (order === 'asc') {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return firstStudent[sortBy] - secondStudent[sortBy];
        });
      } else {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return secondStudent[sortBy] - firstStudent[sortBy];
        });
      }
      break;
    case 'married':
      if (order === 'desc') {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return +secondStudent[sortBy] - +firstStudent[sortBy];
        });
      } else {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return +firstStudent[sortBy] - +secondStudent[sortBy];
        });
      }
      break;
    case 'grades':
      if (order === 'desc') {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return secondStudent[sortBy].reduce(reducer)
            / secondStudent[sortBy].length
            - firstStudent[sortBy].reduce(reducer)
            / firstStudent[sortBy].length;
        });
      } else {
        copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
          return firstStudent[sortBy].reduce(reducer)
            / firstStudent[sortBy].length
            - secondStudent[sortBy].reduce(reducer)
            / secondStudent[sortBy].length;
        });
      }
      break;
    default:
      break;
  }

  return copyStudents;
}
