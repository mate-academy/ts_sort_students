
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

function getAverageGrade(grades: number[]): number {
  return (grades.reduce((sum: number, n: number) => sum + n, 0))
    / grades.length;
}

// export function sortStudents(
//   students: Student[],
//   sortBy: SortType,
//   order: SortOrder,
// ): Student[] {
//   const copyStudents = [...students];

//   copyStudents.sort((a, b): number => {
//     switch (sortBy) {
//       case SortType.Age:
//       case SortType.Married:
//         return (order === 'asc')
//           ? +a[sortBy] - +b[sortBy]
//           : +b[sortBy] - +a[sortBy];

//       case SortType.Name:
//       case SortType.Surname:
//         return (order === 'asc')
//           ? a[sortBy].localeCompare(b[sortBy])
//           : b[sortBy].localeCompare(a[sortBy]);

//       case SortType.AverageGrade:
//         return (order === 'asc')
//           ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
//           : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);

//       default:
//         break;
//     }
//   });

//   return copyStudents;
// }

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort(
          (a, b) => getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]),
        )
        : copyStudents.sort(
          (a, b) => getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]),
        );

    default:
      break;
  }

  return copyStudents;
}
