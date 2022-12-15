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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function averageAge(array: number[]): number {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((prevPerson, currentPerson) => (
          prevPerson[sortBy].localeCompare(currentPerson[sortBy])
        ));
      } else {
        copyStudents.sort((prevPerson, currentPerson) => (
          currentPerson[sortBy].localeCompare(prevPerson[sortBy])
        ));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudents.sort((studentA, studentB) => {
          return averageAge(studentA.grades) - averageAge(studentB.grades);
        });
      } else {
        copyStudents.sort((studentA, studentB) => {
          return averageAge(studentB.grades) - averageAge(studentA.grades);
        });
      }
      break;

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : copyStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    default:
      break;
  }

  return copyStudents;
}
