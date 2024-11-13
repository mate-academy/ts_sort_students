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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function getAverageGrades(student: Student): number {
    return (
      student.grades.reduce((sum, grade) => sum + grade, 0)
        / student.grades.length
    );
  }

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? getAverageGrades(a) - getAverageGrades(b)
          : getAverageGrades(b) - getAverageGrades(a);
      });
      break;

    default:
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
  }

  return sortedStudents;
}
