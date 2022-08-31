
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
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
): Student[] {
  const newStudent = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      return newStudent
        .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (order === 'desc') {
      return newStudent
        .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      return newStudent.sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
    }

    if (order === 'desc') {
      return newStudent.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
    }
  }

  if (sortBy === SortType.Married) {
    const married: Student[] = newStudent
      .filter((person: Student) => person.married === true);
    const notMarried: Student[] = newStudent
      .filter((person: Student) => person.married === false);

    if (order === 'asc') {
      return [...notMarried, ...married];
    }

    if (order === 'desc') {
      return [...married, ...notMarried];
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return newStudent.sort((a: Student, b: Student) => {
        return a.grades
          .reduce((acc: number, val: number) => acc + val, 0) / a.grades.length
          - b.grades
            .reduce((acc: number, val: number) => acc + val, 0)
            / b.grades.length;
      });
    }

    if (order === 'desc') {
      return newStudent.sort((a: Student, b: Student) => {
        return b.grades
          .reduce((acc: number, val: number) => acc + val, 0) / b.grades.length
          - a.grades
            .reduce((acc: number, val: number) => acc + val, 0)
            / a.grades.length;
      });
    }
  }

  return newStudent;
}
