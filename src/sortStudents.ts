
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder)
  : Student[] {
  const temp: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? temp.sort((student, nextStudent) => student[sortBy]
          .localeCompare(nextStudent[sortBy]))
        : temp.sort((student, nextStudent) => nextStudent[sortBy]
          .localeCompare(student[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? temp.sort((student, nextStudent) => Number(student[sortBy])
          - Number(nextStudent[sortBy]))
        : temp.sort((student, nextStudent) => Number(nextStudent[sortBy])
          - Number(student[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? temp.sort((student, nextStudent) => averageGrades(student[sortBy])
          - averageGrades(nextStudent[sortBy]))
        : temp.sort((student, nextStudent) => averageGrades(nextStudent[sortBy])
          - averageGrades(student[sortBy]));
    default:
      return temp;
  }
}
