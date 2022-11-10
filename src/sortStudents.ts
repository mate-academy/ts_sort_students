
export interface Student {
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = Object.values(students);

  switch (sortBy) {
    case SortType.Name:
      studentsArr.sort((a, b) => {
        if (a.name > b.name) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.name < b.name) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      });

      break;

    case SortType.Surname:
      studentsArr.sort((a, b) => {
        if (a.surname > b.surname) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.surname < b.surname) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      });

      break;

    case SortType.Age:
      studentsArr.sort((a, b) => {
        if (a.age > b.age) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.age < b.age) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      });

      break;

    case SortType.Married:
      studentsArr.sort((a, b) => {
        if (a.married > b.married) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.married < b.married) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      });

      break;

    case SortType.AverageGrade:
      studentsArr.sort((a, b) => {
        const averageGradeA = a.grades
          .reduce((acc, grade) => acc + grade, 0)
          / a.grades.length;
        const averageGradeB = b.grades
          .reduce((acc, grade) => acc + grade, 0)
          / b.grades.length;

        if (averageGradeA > averageGradeB) {
          return order === 'asc' ? 1 : -1;
        }

        if (averageGradeA < averageGradeB) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      });

      break;

    default:

      break;
  }

  return studentsArr;
}
