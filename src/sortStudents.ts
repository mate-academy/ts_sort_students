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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];
  const avarage = (grades: number[]): number => {
    return grades
      .reduce((prev: number, elem: number) => prev + elem, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1[sortBy].localeCompare(person2[sortBy])
          : person2[sortBy].localeCompare(person1[sortBy]);
      });
      break;

    case SortType.Age:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1[sortBy] - person2[sortBy]
          : person2[sortBy] - person1[sortBy];
      });
      break;

    case SortType.Married:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? +person1[sortBy] - +person2[sortBy]
          : +person2[sortBy] - +person1[sortBy];
      });
      break;

    default:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? avarage(person1.grades) - avarage(person2.grades)
          : avarage(person2.grades) - avarage(person1.grades);
      });
      break;
  }

  return copy;
}
