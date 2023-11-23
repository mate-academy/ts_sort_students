
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
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// for use, in case of AverageGrade sorting
export function Avg(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder) :Student[] {
  // write your function
  let newarray: number;

  return students.slice().sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        newarray = order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
        break;

      case SortType.Age:
        newarray = order === 'asc' ? a.age - b.age : b.age - a.age;
        break;

      case SortType.Married:
        newarray = order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
        break;

      case SortType.AverageGrade:
        newarray = order === 'asc'
          ? Avg(a) - Avg(b)
          : Avg(b) - Avg(a);
        break;

      default:
        newarray = 0;
    }

    return newarray;
  });
}
