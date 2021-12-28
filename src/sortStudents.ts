
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  let studentsCopy: Student[] = [];

  studentsCopy = students.map((a) => ({ ...a }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((a: Student,
          b: Student) => (a[sortBy].localeCompare(b[sortBy])));
      } else {
        studentsCopy.sort((a: Student,
          b: Student) => (b[sortBy].localeCompare(a[sortBy])));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => (a[sortBy] - b[sortBy]));
      } else {
        studentsCopy.sort((a: Student, b: Student) => (b[sortBy] - a[sortBy]));
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a: Student,
          b: Student) => (+a[sortBy] - +b[sortBy]));
      } else {
        studentsCopy.sort((a: Student,
          b: Student) => (+b[sortBy] - +a[sortBy]));
      }

      break;

    case SortType.AverageGrade:
      studentsCopy.sort((first: Student, second: Student) => {
        let gradesFirst = first[sortBy].reduce((prev, a) => (prev + a));

        gradesFirst /= first[sortBy].length;

        let gradesSecond = second[sortBy].reduce((prev, a) => (prev + a));

        gradesSecond /= second[sortBy].length;

        if (order === 'asc') {
          return gradesFirst - gradesSecond;
        }

        return gradesSecond - gradesFirst;
      });
      break;

    default:
      throw new Error('error');
  }

  return studentsCopy;
}
