
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  // write your function
  const sortedStudents = [...students];

  const sortingFunction = (a: Student, b: Student): number => {
    const calculateAverageGrade = (student: Student): number => {
      const gradesSum = student.grades.reduce(
        (sum: number, grade: number) => sum + grade, 0,
      );

      return gradesSum / student.grades.length;
    };

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return a.age - b.age;
      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? 1 : -1;
      case SortType.AverageGrade:
        return calculateAverageGrade(a) - calculateAverageGrade(b);
      default:
        throw new Error('Invalid sortType');
    }
  };

  sortedStudents.sort((a, b) => ((order === 'asc'
    ? 1
    : -1
  ) * sortingFunction(a, b)));

  return sortedStudents;
}
