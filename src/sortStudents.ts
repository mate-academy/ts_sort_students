
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

export type SortOrder = 'asc'| 'desc';

const getAverageGrades = (grades: number[]): number => {
  return grades.length
    ? grades.reduce((acc, cur) => acc + cur, 0) / grades.length
    : 0;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents:Student[] = [...students];

  return sortedStudents.sort((firstStud, secondStud) => {
    const studAField = firstStud[sortBy];
    const studBField = secondStud[sortBy];

    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:

        return order === 'asc'
          ? studAField.localeCompare(studBField)
          : studBField.localeCompare(studAField);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studAField) - Number(studBField)
          : Number(studBField) - Number(studAField);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(studAField) - getAverageGrades(studBField)
          : getAverageGrades(studBField) - getAverageGrades(studAField);

      default:
        throw new Error('No such sort type');
    }
  });
}
