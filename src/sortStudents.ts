
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
  AverageGrade = 'average',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrades(grades: number[]): number {
  return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const preparedStudents = [...students];

  if (sortBy && order === 'asc') {
    preparedStudents.sort((student1, student2) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student1[sortBy].localeCompare(student2[sortBy]);
        case SortType.Age:
          return student1.age - student2.age;
        case SortType.Married:
          return Number(student1.married) - Number(student2.married);
        case SortType.AverageGrade:
          return calculateAverageGrades(student1.grades)
            - calculateAverageGrades(student2.grades);
        default:
          return 0;
      }
    });
  }

  if (sortBy && order === 'desc') {
    preparedStudents.sort((student1, student2) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student2[sortBy].localeCompare(student1[sortBy]);
        case SortType.Age:
          return student2.age - student1.age;
        case SortType.Married:
          return Number(student2.married) - Number(student1.married);
        case SortType.AverageGrade:
          return calculateAverageGrades(student2.grades)
            - calculateAverageGrades(student1.grades);
        default:
          return 0;
      }
    });
  }

  return preparedStudents;
}
