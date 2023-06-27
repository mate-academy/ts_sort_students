export interface Student {
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType,
  order: SortOrder,
): Student[] {
  // Create a new array to hold the sorted students
  const sortedStudents = [...students];

  // Define the sorting logic based on the provided sortBy parameter
  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SortType.Surname:
      sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      break;
    case SortType.Age:
      sortedStudents.sort((a, b) => a.age - b.age);
      break;
    case SortType.Married:
      sortedStudents.sort((a, b) => {
        if (a.married === b.married) {
          return 0;
        }

        if (order === 'asc') {
          return a.married ? -1 : 1;
        // eslint-disable-next-line no-else-return
        } else {
          return a.married ? 1 : -1;
        }
      });
      break;
    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const averageGradeA = calculateAverageGrade(a);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const averageGradeB = calculateAverageGrade(b);

        return averageGradeA - averageGradeB;
      });
      break;
    default:
      break;
  }

  // Reverse the array if the order is 'desc'
  if (order === 'desc') {
    sortedStudents.reverse();
  }

  return sortedStudents;
}

function calculateAverageGrade(student: Student): number {
  const sum = student.grades.reduce(
    (total, grade) => total + grade, 0,
  );

  return sum / student.grades.length;
}
