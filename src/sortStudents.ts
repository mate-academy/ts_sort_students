
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function avgGrades(grades: number[]): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  return [...students]
    .sort((person1: Student, person2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return person1[sortBy].localeCompare(person2[sortBy]);

        case SortType.Married:
          return order === 'asc'
            ? Number(person1.married) - Number(person2.married)
            : Number(person2.married) - Number(person1.married);

        case SortType.Age:
          return order === 'asc'
            ? person1.age - person2.age
            : person2.age - person1.age;

        case SortType.AverageGrade:
          return order === 'asc'
            ? avgGrades(person1[sortBy]) - avgGrades(person2[sortBy])
            : avgGrades(person2[sortBy]) - avgGrades(person1[sortBy]);

        default:
          return 0;
      }
    });
}
