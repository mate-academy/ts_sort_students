// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  const AverageGrade = (grades: number[]) :number => {
    return grades.reduce((sum: number, value: number) => sum + value, 0)
      / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyOfStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? AverageGrade(a[sortBy]) - AverageGrade(b[sortBy])
          : AverageGrade(b[sortBy]) - AverageGrade(a[sortBy]);
      });
      break;

    case SortType.Married:
      copyOfStudents.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.asc) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
