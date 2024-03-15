export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case SortType.Surname:
        aValue = a.surname.toLowerCase();
        bValue = b.surname.toLowerCase();
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married ? 1 : 0;
        bValue = b.married ? 1 : 0;
        break;

      case SortType.AverageGrade: {
        const avgGradeA = a.grades
          .reduce((acc, curr) => acc + curr, 0) / a.grades.length;
        const avgGradeB = b.grades
          .reduce((acc, curr) => acc + curr, 0) / b.grades.length;

        aValue = avgGradeA;
        bValue = avgGradeB;
        break;
      }
      default:
        throw new Error('Invalid SortType');
    }

    if (aValue === bValue) {
      return students.indexOf(a) - students.indexOf(b);
    }

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    }

    return aValue > bValue ? -1 : 1;
  });

  return sortedStudents;
}
