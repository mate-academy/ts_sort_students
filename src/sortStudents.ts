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
  Grades = 'grades',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(student: Student): number {
  const total = student.grades.reduce((sum, grade) => (sum + grade), 0);

  return total / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])));
      break;

    case SortType.Age:

      result.sort((a: Student, b: Student) => (
        order === 'asc' ? a.age - b.age : b.age - a.age));

      break;

    case SortType.Married:
      result.sort((a: Student, b: Student) => {
        if (a.married === b.married) {
          return 0;
        }

        const ifOrder = order === 'asc' ? 1 : -1;

        return (a.married && !b.married) ? ifOrder : -ifOrder;
      });
      break;

    case SortType.Grades:
      result.sort((a: Student, b: Student) => {
        const avgA = averageGrade(a);
        const avgB = averageGrade(b);

        return order === 'asc' ? avgA - avgB : avgB - avgA;
      });
      break;

    case SortType.AverageGrade:
      result.sort((a: Student, b: Student) => {
        const avgA = averageGrade(a);
        const avgB = averageGrade(b);

        if (avgA === avgB) {
          return 0;
        }

        return order === 'asc' ? avgA - avgB : avgB - avgA;
      });
      break;

    default:
      return result;
  }

  return result;
}
