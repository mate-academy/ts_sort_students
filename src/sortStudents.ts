
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  const copyStudents = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades.reduce((prev, cur) => prev + cur, 0)
    / student.grades.length;
  }

  copyStudents.sort((firstStudent, secondStudent) => {
    let a = firstStudent;
    let b = secondStudent;

    if (order === 'desc') {
      b = firstStudent;
      a = secondStudent;
    }

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return a.age - b.age;
      case SortType.Married:
        return +a.married - +b.married;
      case SortType.AverageGrade:
        return getAverageGrade(a) - getAverageGrade(b);
      default: throw new Error('Error');
    }
  });

  return copyStudents;
}
