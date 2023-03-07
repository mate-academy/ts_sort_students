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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

function getAverageGrade(student: Student): number {
  return student.grades.reduce((total, grade) => total + grade)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentCopy.sort((firstStudent, secondStudent): number => {
        const isAscending = order === SortOrder.Asc;

        return isAscending
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      studentCopy.sort((firstStudent, secondStudent): number => {
        const isAscending = order === SortOrder.Asc;

        return isAscending
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];
      });

      break;

    case SortType.AverageGrade:
      studentCopy.sort((firstStudent, secondStudent): number => {
        const isAscending = order === SortOrder.Asc;

        return isAscending
          ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
          : getAverageGrade(secondStudent) - getAverageGrade(firstStudent);
      });

      break;

    default:
      throw new Error('Invalid SortBy value');
  }

  return studentCopy;
}
