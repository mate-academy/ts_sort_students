
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
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

function getAverage({ grades }: Student): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((firstPerson, secondPerson) => {
    const direction = order === SortOrder.Asc
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          firstPerson[sortBy].localeCompare(secondPerson[sortBy])
        ) * direction;

      case SortType.Age:
      case SortType.Married:
        return (
          Number(firstPerson[sortBy]) - Number(secondPerson[sortBy])
        ) * direction;

      case SortType.AverageGrade:
        return (
          getAverage(firstPerson) - getAverage(secondPerson)
        ) * direction;

      default:
        throw new Error(`Unknown sort type: ${sortBy}`);
    }
  });
}
