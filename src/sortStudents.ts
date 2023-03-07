
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
        comparison = studentA.name.localeCompare(studentB.name);
        break;

      case SortType.Surname:
        comparison = studentA.surname.localeCompare(studentB.surname);
        break;

      case SortType.Age:
        comparison = studentA.age - studentB.age;
        break;

      case SortType.Married:
        return order === SortOrder.Ascending
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return order === SortOrder.Ascending
          ? findAvgGrade(studentA) - findAvgGrade(studentB)
          : findAvgGrade(studentB) - findAvgGrade(studentA);

      default:
        break;
    }

    return order === 'asc' ? comparison : comparison * -1;
  });

  return sortedStudents;
}
