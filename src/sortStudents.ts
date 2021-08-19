// describe Student type
// create and export SortType enum
// create SortOrder type
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) :Student[] {
  const studentsCopy: Student[] = [...students];

  const sumOfGrades = (grades: number[]) :number => {
    return grades.reduce((sum: number, value: number) => sum + value, 0);
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a: Student, b: Student) => {
        return order === SortOrder.Asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((a: Student, b: Student) => {
        return order === SortOrder.Asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a: Student, b: Student) => {
        return order === SortOrder.Asc
          ? sumOfGrades(a[sortBy]) - sumOfGrades(b[sortBy])
          : sumOfGrades(b[sortBy]) - sumOfGrades(a[sortBy]);
      });
      break;

    case SortType.Married:
      studentsCopy.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Asc) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
