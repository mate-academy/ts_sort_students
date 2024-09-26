
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsInAnyOrder = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades.reduce((total, grade) => total + grade, 0)
    / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsInAnyOrder.sort((prevStudent,
        nextStudent): number => {
        return (order === 'asc')
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsInAnyOrder.sort((prevStudent,
        nextStudent): number => {
        return (order === 'asc')
          ? +prevStudent[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +prevStudent[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? getAverageGrade(prevStudent) - getAverageGrade(nextStudent)
          : getAverageGrade(nextStudent) - getAverageGrade(prevStudent);
      });
      break;

    default:
      throw new Error();
  }

  return studentsInAnyOrder;
}
