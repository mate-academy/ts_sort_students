export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType{
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

function getAverageGrade(students: Student): number {
  const sumOfGrades = students.grades.reduce((sum, grade) => sum + grade);

  return sumOfGrades / students.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((s1, s2) => {
        return (order === SortOrder.asc)
          ? s1[sortBy].localeCompare(s2[sortBy])
          : s2[sortBy].localeCompare(s1[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((s1, s2) => {
        return (order === SortOrder.asc)
          ? s1[sortBy] - s2[sortBy]
          : s2[sortBy] - s1[sortBy];
      });
      break;

    case SortType.Married:
      studentsCopy.sort((s1, s2) => {
        return (order === SortOrder.asc)
          ? +s1[sortBy] - +s2[sortBy]
          : +s2[sortBy] - +s1[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((s1, s2) => {
        return (order === SortOrder.asc)
          ? getAverageGrade(s1) - getAverageGrade(s2)
          : getAverageGrade(s2) - getAverageGrade(s1);
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
