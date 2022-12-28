
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

function calculateAvgGrades(grades: number[]): number {
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
            ? Number(person1[sortBy]) - Number(person2[sortBy])
            : Number(person2[sortBy]) - Number(person1[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? person1[sortBy] - person2[sortBy]
            : person2[sortBy] - person1[sortBy];

        case SortType.AverageGrade:
          return order === 'asc'
            ? calculateAvgGrades(person1[sortBy])
              - calculateAvgGrades(person2[sortBy])
            : calculateAvgGrades(person2[sortBy])
              - calculateAvgGrades(person1[sortBy]);

        default:
          return 0;
      }
    });
}
