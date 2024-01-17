
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

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function findAvgGrade({ grades }: Student): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((studentA, studentB) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;

      case SortType.Age:
        comparison = studentA.age - studentB.age;
        break;

      case SortType.Married:
        comparison = Number(studentA[sortBy]) - Number(studentB[sortBy]);
        break;

      case SortType.AverageGrade:
        comparison = findAvgGrade(studentA) - findAvgGrade(studentB);
        break;

      default:
        break;
    }

    return comparison * (order === SortOrder.Ascending ? 1 : -1);
  });

  return sortedStudents;
}
