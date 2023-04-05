
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function averageMarks(student: Student): number {
    return student.grades.reduce((sum: number, grade: number) => {
      return sum + grade;
    }, 0) / student.grades.length;
  }

  return studentsCopy.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Married:
        return order === 'asc'
          ? student1[sortBy].toString()
            .localeCompare(student2[sortBy].toString())
          : student2[sortBy].toString()
            .localeCompare(student1[sortBy].toString());

      case SortType.Age:
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageMarks(student1) - averageMarks(student2)
          : averageMarks(student2) - averageMarks(student1);

      default:
        throw new Error('Error');
    }
  });
}
