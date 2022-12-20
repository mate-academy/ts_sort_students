
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],

}

export enum SortType {
  // describe SortType enum
  Name = 'n',
  Surname = 's',
  Age = 'a',
  Married = 'm',
  AverageGrade = 'aG',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let result = 0;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        result = a.age - b.age;
        break;

      case SortType.Married:
        result = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade:
        result = (a.grades.reduce((sum, grade) => sum + grade, 0)
        / a.grades.length)
        - (b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length);
        break;

      default:
        throw new Error('sort type not supported');
    }

    return order === 'asc' ? result : -result;
  });

  return sortedStudents;
}
