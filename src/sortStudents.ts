
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrStudent = [...students];
  const averageMarks = (s: Student): number => {
    return s.grades.reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0) / s.grades.length;
  };

  return newArrStudent.sort((s1: Student, s2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Married:
        return order === 'asc'
          ? s1[sortBy].toString()
            .localeCompare(s2[sortBy].toString())
          : s2[sortBy].toString()
            .localeCompare(s1[sortBy].toString());

      case SortType.Age:
        return order === 'asc'
          ? s1.age - s2.age
          : s2.age - s1.age;

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageMarks(s1) - averageMarks(s2)
          : averageMarks(s2) - averageMarks(s1);

      default:
        throw new Error('Error');
    }
  });
}
