
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;

      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;

      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;

      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;

      case SortType.AverageGrade: {
        const aGradeSum = a.grades.reduce((sum, grade) => sum + grade, 0);
        const bGradeSum = b.grades.reduce((sum, grade) => sum + grade, 0);
        const aGradeAvg = aGradeSum / a.grades.length;
        const bGradeAvg = bGradeSum / b.grades.length;

        aValue = aGradeAvg;
        bValue = bGradeAvg;
        break;
      }

      default:
        throw new Error('Invalid SortType');
    }

    if (aValue === bValue) {
      return 0;
    }

    if (order === 'asc') {
      return aValue > bValue ? 1 : -1;
    }

    return aValue < bValue ? 1 : -1;
  });

  return sortedStudents;
}
