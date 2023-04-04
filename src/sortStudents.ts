
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades
      .reduce((acc, grade) => acc + grade, 0) / student.grades.length;
  }

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        comparison = a.age - b.age;
        break;

      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married ? 1 : -1;
        }
        break;

      case SortType.AverageGrade: {
        const avgA = getAverageGrade(a);
        const avgB = getAverageGrade(b);

        comparison = avgA - avgB;
        break;
      }

      default:
        throw new Error('Invalid input');
    }

    if (order === 'desc') {
      comparison *= -1;
    }

    return comparison;
  });

  return sortedStudents;
}
