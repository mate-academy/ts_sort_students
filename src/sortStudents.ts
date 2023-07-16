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
  const getAverageGrade = (grades: number[]): number => {
    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
  };

  sortedStudents.sort((studentA, studentB) => {
    let comparison = 0;
    let averageGradeA;
    let averageGradeB;

    switch (sortBy) {
      case SortType.Name:
        comparison = studentA.name.localeCompare(studentB.name);
        break;
      case SortType.Surname:
        comparison = studentA.surname.localeCompare(studentB.surname);
        break;
      case SortType.Age:
        comparison = studentA.age - studentB.age;
        break;
      case SortType.Married:
        if (studentA.married === studentB.married) {
          comparison = 0;
        } else if (studentA.married) {
          comparison = 1;
        } else {
          comparison = -1;
        }
        break;
      case SortType.AverageGrade:
        averageGradeA = getAverageGrade(studentA.grades);
        averageGradeB = getAverageGrade(studentB.grades);

        comparison = averageGradeA - averageGradeB;
        break;
      default:
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
