export interface Student {
  name: string
  surname : string
  age: number
  married: boolean
  grades: number[]
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

function calculateAverageGrade(student: Student): number {
  const sum: number = student.grades.reduce((acc, grade) => acc + grade, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = students.map((obj: Student) => ({ ...obj }));

  newArray.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        if (a.married) {
          return -1;
        }

        return 1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(a) - calculateAverageGrade(b)
          : calculateAverageGrade(b) - calculateAverageGrade(a);

      default:
        // Handle unsupported SortType values
        return 0;
    }
  });

  return newArray;
}
