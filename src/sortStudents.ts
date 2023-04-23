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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function compareAverage(a: number[]): number {
    return a
      .reduce((sum: number, grade: number) => sum + grade, 0) / a.length;
  }

  sortedStudents.sort((firstStudent, secondStudent) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = firstStudent.name.localeCompare(secondStudent.name);
        break;
      case SortType.Surname:
        comparison = firstStudent.surname.localeCompare(secondStudent.surname);
        break;
      case SortType.Age:
        comparison = firstStudent.age - secondStudent.age;
        break;
      case SortType.Married:
        comparison = Number(firstStudent.married)
          - Number(secondStudent.married);
        break;
      case SortType.AverageGrade: {
        const averageA = compareAverage(firstStudent.grades);
        const averageB = compareAverage(secondStudent.grades);

        comparison = averageA - averageB;
      }
        break;
      default: throw new Error();
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
