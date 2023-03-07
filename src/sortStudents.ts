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
  ASC = 'asc',
  DESC = 'desc',
}

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((accumulator, currentGrade) => (
    accumulator + currentGrade)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((currentStudent, previousStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === SortOrder.ASC
          ? currentStudent[sortBy].localeCompare(previousStudent[sortBy])
          : previousStudent[sortBy].localeCompare(currentStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === SortOrder.ASC
          ? +(currentStudent[sortBy]) - +(previousStudent[sortBy])
          : +(previousStudent[sortBy]) - +(currentStudent[sortBy]);

      case SortType.AverageGrade:
        return order === SortOrder.ASC
          ? calculateAverageGrade(currentStudent)
            - calculateAverageGrade(previousStudent)

          : calculateAverageGrade(previousStudent)
            - calculateAverageGrade(currentStudent);

      default:
        throw new Error('Sort types are invalid');
    }
  });
}
