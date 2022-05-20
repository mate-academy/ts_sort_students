
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  function averageGrades(human: Student): number {
    return human.grades.reduce((a, b) => a + b) / human.grades.length;
  }

  copy.sort((person1: Student, person2: Student) => {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        return order === 'asc'
          ? person1[sortBy].localeCompare(person2[sortBy])
          : person2[sortBy].localeCompare(person1[sortBy]);

      case (SortType.Age):
        return order === 'asc'
          ? person1[sortBy] - person2[sortBy]
          : person2[sortBy] - person1[sortBy];

      case (SortType.Married):
        return order === 'asc'
          ? +person1[sortBy] - +person2[sortBy]
          : +person2[sortBy] - +person1[sortBy];

      case (SortType.AverageGrade):
        return order === 'asc'
          ? averageGrades(person1) - averageGrades(person2)
          : averageGrades(person2) - averageGrades(person1);

      default:
        return 0;
    }
  });

  return copy;
}
