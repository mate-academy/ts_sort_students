
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((studentOne: Student, studentTwo: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studentOne[sortBy]) - Number(studentTwo[sortBy])
          : Number(studentTwo[sortBy]) - Number(studentOne[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? average(studentOne.grades) - average(studentTwo.grades)
          : average(studentTwo.grades) - average(studentOne.grades);

      default:
        throw new Error('Error SortType');
    }
  });

  return copy;
}
