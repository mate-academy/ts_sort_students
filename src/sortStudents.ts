
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';


export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder) {
  const compareFunction = (a: Student, b: Student) => {
    let result = 0;

    if (sortBy === SortType.Name) {
      result = a.name.localeCompare(b.name);
    } else if (sortBy === SortType.Surname) {
      result = a.surname.localeCompare(b.surname);
    } else if (sortBy === SortType.Age) {
      result = a.age - b.age;
    } else if (sortBy === SortType.Married) {
      result = a.married === b.married ? 0 : a.married ? -1 : 1;
    } else if (sortBy === SortType.AverageGrade) {
      const aAvg = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
      const bAvg = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
      result = aAvg - bAvg;
    }

    return order === 'asc' ? result : -result;
  };

  return [...students].sort(compareFunction);
}
