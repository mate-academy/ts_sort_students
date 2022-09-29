
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  id?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'id',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getResult(
  students: Student[],
  criteria: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = (criteria === SortType.AverageGrade)
    ? students.map((student) => (
      {
        ...student,
        id: student.grades.reduce((a, b) => a + b, 0) / student.grades.length,
      }
    ))
    : students.map((student, id) => ({
      ...student, id,
    }));

  if (order === 'asc') {
    return studentsCopy.sort((currentStud, nextStud) => {
      if (currentStud[criteria] < nextStud[criteria]) {
        return -1;
      }

      if (currentStud[criteria] > nextStud[criteria]) {
        return 1;
      }

      return 0;
    });
  }

  if (order === 'desc') {
    return studentsCopy
      .sort((currentStud, nextStud) => {
        if (currentStud[criteria] > nextStud[criteria]) {
          return -1;
        }

        if (currentStud[criteria] < nextStud[criteria]) {
          return 1;
        }

        return 0;
      });
  }

  return students;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return getResult(students, sortBy, order);
}
