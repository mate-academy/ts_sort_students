
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

export function averageNumber(grades: number[]) :number {
  return grades.reduce((sum:number, grade:number): number => {
    return sum + grade;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  let sortedStudents:Student[];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
      sortedStudents = [...students].sort((student1, student2) => {
        return student1[sortBy].localeCompare(student2[sortBy]);
      });
      break;
    case SortType.Age:
    case SortType.Married:
      sortedStudents = [...students].sort((student1, student2) => {
        return ((+student1[sortBy]) - (+student2[sortBy])) * sortOrder;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents = [...students].sort((student1, student2) => {
        const avgGradesStudent1 = averageNumber(student1.grades);
        const avgGradesStudent2 = averageNumber(student2.grades);

        return (avgGradesStudent1 - avgGradesStudent2) * sortOrder;
      });
      break;

    default:
      sortedStudents = [...students];
      break;
  }

  return sortedStudents;
}
