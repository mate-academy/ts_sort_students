
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  avgGrades: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avgGrades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  criteria: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students.map((student) => (
    {
      ...student,
      avgGrades: student.grades
        .reduce((a, b) => a + b, 0) / student.grades.length,
    }
  ));

  if (order === 'asc') {
    return studentsCopy.sort((currentStud, nextStud) => {
      if (currentStud?.[criteria] < nextStud[criteria]) {
        return -1;
      }

      if (currentStud?.[criteria] > nextStud?.[criteria]) {
        return 1;
      }

      return 0;
    });
  }

  if (order === 'desc') {
    return studentsCopy
      .sort((currentStud: Student, nextStud: Student) => {
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
