
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

export function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder) :Student[] {
  // write your function
  let compareResult: number;

  return students.slice().sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        compareResult = order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
        break;

      case SortType.Age:
        compareResult = order === 'asc' ? a.age - b.age : b.age - a.age;
        break;

      case SortType.Married:
        compareResult = order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
        break;

      case SortType.AverageGrade:
        compareResult = order === 'asc'
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a);
        break;

      default:
        compareResult = 0;
    }

    return compareResult;
  });
}
