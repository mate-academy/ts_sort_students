export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  averageGrade: number,
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
  const studentsOut = students.map((student) => (
    {
      ...student,
      averageGrade: student.grades.reduce(
        (prevGrade, currGrade) => prevGrade + currGrade,
      ) / student.grades.length,
    }
  ));

  function compareFn(aStudent: Student, bStudent: Student): number {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? bStudent[sortBy].localeCompare(aStudent[sortBy])
          : aStudent[sortBy].localeCompare(bStudent[sortBy]);

      case SortType.Age:
      case SortType.AverageGrade:
        return order === 'desc'
          ? bStudent[sortBy] - aStudent[sortBy]
          : aStudent[sortBy] - bStudent[sortBy];

      case SortType.Married:
        return order === 'desc'
          ? Number(bStudent.married) - Number(aStudent.married)
          : Number(aStudent.married) - Number(bStudent.married);

      default:
        return 0;
    }
  }

  return studentsOut.sort(compareFn);
}
