
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';


export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder) {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    if (order === 'asc') {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);
        case SortType.Surname:
          return a.surname.localeCompare(b.surname);
        case SortType.Age:
          return a.age - b.age;
        case SortType.Married:
          return (a.married ? 1 : 0) - (b.married ? 1 : 0);
        case SortType.AverageGrade:
          const aGrades = a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
          const bGrades = b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
          return aGrades - bGrades;
      }
    }

    if (order === 'desc') {
      switch (sortBy) {
        case SortType.Name:
          return b.name.localeCompare(a.name);
        case SortType.Surname:
          return b.surname.localeCompare(a.surname);
        case SortType.Age:
          return b.age - a.age;
        case SortType.Married:
          return (b.married ? 1 : 0) - (a.married ? 1 : 0);
        case SortType.AverageGrade:
          const aGrades = a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
          const bGrades = b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
          return bGrades - aGrades;
      }
    }


  });

  return sortedStudents;
}
