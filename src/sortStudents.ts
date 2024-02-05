
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

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(student: Student): number {
  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])));

      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((student1, student2) => (order === 'asc'
        ? +student1[sortBy] - +student2[sortBy]
        : +student2[sortBy] - +student1[sortBy]));

      break;

    case SortType.AverageGrade:
      sortedStudents.sort((student1, student2) => (order === 'asc'
        ? calculateAverageGrade(student1) - calculateAverageGrade(student2)
        : calculateAverageGrade(student2) - calculateAverageGrade(student1)
      ));

      break;

    default:
      return sortedStudents;
  }

  return sortedStudents;
}
