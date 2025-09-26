
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

function getAverage(grades: number[]): number {
  return grades.length ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const studentsWithIndex = sortedStudents.map((student, index) => ({
    student,
    originalIndex: index,
  }));

  studentsWithIndex.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.student.name.localeCompare(b.student.name);
        break;
      case SortType.Surname:
        comparison = a.student.surname.localeCompare(b.student.surname);
        break;
      case SortType.Age:
        comparison = a.student.age - b.student.age;
        break;
      case SortType.Married:
        comparison = Number(a.student.married) - Number(b.student.married);
        break;

      case SortType.AverageGrade: {
        const avgA = getAverage(a.student.grades);
        const avgB = getAverage(b.student.grades);

        comparison = avgA - avgB;
        break;
      }
      default:
        comparison = 0;
    }

    if (comparison === 0) {
      return a.originalIndex - b.originalIndex;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return studentsWithIndex.map((item) => item.student);
}
