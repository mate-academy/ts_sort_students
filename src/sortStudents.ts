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
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

const countAverage = (array: number[]): number => {
  const sum = array.reduce((acc: number, value: number) => acc + value, 0);

  return sum / array.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort(
        (
          firstStudent: Student,
          secondStudent: Student,
        ): number => {
          return (order === 'asc')
            ? firstStudent.name.localeCompare(secondStudent.name)
            : secondStudent.name.localeCompare(firstStudent.name);
        },
      );
      break;
    case SortType.Surname:
      sortedStudents.sort(
        (
          firstStudent: Student,
          secondStudent: Student,
        ): number => {
          return (order === 'asc')
            ? firstStudent.surname.localeCompare(secondStudent.surname)
            : secondStudent.surname.localeCompare(firstStudent.surname);
        },
      );
      break;
    case SortType.Age:
      sortedStudents.sort(
        (
          firstStudent: Student,
          secondStudent: Student,
        ): number => {
          return (order === 'asc')
            ? firstStudent.age - secondStudent.age
            : secondStudent.age - firstStudent.age;
        },
      );
      break;
    case SortType.Married:
      sortedStudents.sort(
        (
          firstStudent: Student,
          secondStudent: Student,
        ): number => {
          return (order === 'asc')
            ? (firstStudent.married ? 1 : 0) - (secondStudent.married ? 1 : 0)
            : (secondStudent.married ? 1 : 0) - (firstStudent.married ? 1 : 0);
        },
      );
      break;
    case SortType.AverageGrade:
      sortedStudents.sort(
        (
          firstStudent: Student,
          secondStudent: Student,
        ): number => {
          const firstStudentAverageGrades = countAverage(firstStudent.grades);
          const secondStudentAverageGrades = countAverage(secondStudent.grades);

          return (order === 'asc')
            ? firstStudentAverageGrades - secondStudentAverageGrades
            : secondStudentAverageGrades - firstStudentAverageGrades;
        },
      );
      break;
    default:
      return sortedStudents;
  }

  return sortedStudents;
}
