
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? [...students]
          .sort((firstStudent, secondStudent) => firstStudent[sortBy]
            .localeCompare(secondStudent[sortBy]))
        : [...students]
          .sort((firstStudent, secondStudent) => secondStudent[sortBy]
            .localeCompare(firstStudent[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? [...students]
          .sort((firstStudent, secondStudent) => Number(firstStudent[sortBy])
            - Number(secondStudent[sortBy]))
        : [...students]
          .sort((firstStudent, secondStudent) => Number(secondStudent[sortBy])
            - Number(firstStudent[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? [...students]
          .sort((firstStudent, secondStudent) => (firstStudent.grades
            .reduce((acc, num) => acc + num, 0) / firstStudent.grades.length)
              - (secondStudent.grades
                .reduce((acc, num) => acc + num)) / secondStudent.grades.length)
        : [...students]
          .sort((firstStudent, secondStudent) => (secondStudent.grades
            .reduce((acc, num) => acc + num, 0) / secondStudent.grades.length)
              - (firstStudent.grades
                .reduce((acc, num) => acc + num)) / firstStudent.grades.length);

    default:
      throw new Error('unknown sort type');
  }
}
