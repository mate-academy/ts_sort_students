
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

function getAverage(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((firstPerson, secondPerson) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === SortOrder.Asc
          ? firstPerson[sortBy].localeCompare(secondPerson[sortBy])
          : secondPerson[sortBy].localeCompare(firstPerson[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === SortOrder.Asc
          ? Number(firstPerson[sortBy]) - Number(secondPerson[sortBy])
          : Number(secondPerson[sortBy]) - Number(firstPerson[sortBy]);

      case SortType.AverageGrade:
        return order === SortOrder.Asc
          ? getAverage(firstPerson.grades) - getAverage(secondPerson.grades)
          : getAverage(secondPerson.grades) - getAverage(firstPerson.grades);

      default:
        throw new Error(`Unknown sort type: ${sortBy}`);
    }
  });
}
