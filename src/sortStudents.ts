
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function averageSortGrade(student: Student): number {
  return student.grades
    .reduce((acc, curr) => acc + curr, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])
      ));

      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((student1, student2) => (order === 'asc'
        ? +student1[sortBy] - +student2[sortBy]
        : +student2[sortBy] - +student1[sortBy]
      ));

      break;

    case SortType.AverageGrade:
      copyStudents.sort((student1, student2) => (order === 'asc'
        ? averageSortGrade(student1) - averageSortGrade(student2)
        : averageSortGrade(student2) - averageSortGrade(student1)
      ));

      break;

    default:
      return copyStudents;
  }

  return copyStudents;
}
