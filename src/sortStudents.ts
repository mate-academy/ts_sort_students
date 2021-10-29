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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy: Student[] = students
    .map((student: Student) => ({ ...student }));

  const getAverageGrade = (student: Student): number => {
    return student.grades
      .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  };

  const isAscending = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.name.localeCompare(secondStudent.name)
        : secondStudent.name.localeCompare(firstStudent.name)
      ));
      break;

    case SortType.Surname:
      studentsCopy.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.surname.localeCompare(secondStudent.surname)
        : secondStudent.surname.localeCompare(firstStudent.surname)
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.age - secondStudent.age
        : secondStudent.age - firstStudent.age
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((firstStudent, secondStudent) => (isAscending
        ? Number(firstStudent.married) - Number(secondStudent.married)
        : Number(secondStudent.married) - Number(firstStudent.married)
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((firstStudent, secondStudent) => (isAscending
        ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
        : getAverageGrade(secondStudent) - getAverageGrade(firstStudent)
      ));
      break;

    default:
  }

  return studentsCopy;
}
