
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  function avgMark(student: Student): number {
    return student.grades.reduce((accum: number, mark: number) => {
      return accum + mark;
    }, 0) / student.grades.length;
  }

  return copyStudents.sort((firstSudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Married:
        return order === 'asc'
          ? firstSudent[sortBy].toString()
            .localeCompare(secondStudent[sortBy].toString())
          : secondStudent[sortBy].toString()
            .localeCompare(firstSudent[sortBy].toString());

      case SortType.Age:
        return order === 'asc'
          ? Number(firstSudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstSudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? avgMark(firstSudent) - avgMark(secondStudent)
          : avgMark(secondStudent) - avgMark(firstSudent);

      default:
        throw new Error('Some value is wrong');
    }
  });
}
