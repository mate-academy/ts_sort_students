type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function calcAverageGrade(student: Student): number {
  const sumOfGrades = student.grades.reduce((sum, grade) => sum + grade, 0);

  return sumOfGrades / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort(
        (a, b) => {
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );
      break;

    case SortType.Age:
      studentsCopy.sort(
        (a, b) => {
          return order === 'asc'
            ? a[sortBy] - (b[sortBy])
            : b[sortBy] - (a[sortBy]);
        },
      );
      break;

    case SortType.Married:
      studentsCopy.sort(
        (a, b) => {
          return order === 'asc'
            ? +a[sortBy] - +(b[sortBy])
            : +b[sortBy] - +(a[sortBy]);
        },
      );
      break;

    case SortType.AverageGrade:
      studentsCopy.sort(
        (a, b) => {
          return order === 'asc'
            ? calcAverageGrade(a) - calcAverageGrade(b)
            : calcAverageGrade(b) - calcAverageGrade(a);
        },
      );
      break;

    default:
      break;
  }

  return studentsCopy;
}
// if (sortBy === SortType.Name || sortBy === SortType.Surname) {
//   if (order === 'asc') {
//     studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//   } else {
//     studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
//   }
// }

// if (sortBy === SortType.Age) {
//   if (order === 'asc') {
//     studentsCopy.sort((a, b) => a[sortBy] - (b[sortBy]));
//   } else {
//     studentsCopy.sort((a, b) => b[sortBy] - (a[sortBy]));
//   }
// }

// if (sortBy === SortType.Married) {
//   if (order === 'asc') {
//     studentsCopy.sort((a, b) => +a[sortBy] - +(b[sortBy]));
//   } else {
//     studentsCopy.sort((a, b) => +b[sortBy] - +(a[sortBy]));
//   }
// }

// if (sortBy === SortType.AverageGrade) {
//   if (order === 'asc') {
//     studentsCopy.sort((a, b) => calcAverageGrade(a) - calcAverageGrade(b));
//   } else {
//     studentsCopy.sort((a, b) => calcAverageGrade(b) - calcAverageGrade(a));
//   }
// }
