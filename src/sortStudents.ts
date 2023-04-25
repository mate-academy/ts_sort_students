export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  const field = sortBy;

  switch (sortBy) {
    case SortType.Name:
      return (copyStudents
        .sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => {
          return order === 'asc'
            ? firstStudent.name.localeCompare(secondStudent.name)
            : Number(!firstStudent.name.localeCompare(secondStudent.name));
        }));

    case SortType.Surname:
      return (copyStudents
        .sort((
          firstStudent,
          secondStudent,
        ) => {
          const aValue = firstStudent[field];
          const bValue = secondStudent[field];

          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return order === 'asc'
              ? aValue.localeCompare(bValue)
              : Number(!aValue.localeCompare(bValue));
          }

          return 0;
        }));

    case SortType.Age:
      return (copyStudents
        .sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => {
          return order === 'asc'
            ? firstStudent.age - secondStudent.age
            : secondStudent.age - firstStudent.age;
        }));

    case SortType.Married:
      return (copyStudents
        .sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => {
          return order === 'asc'
            ? Number(firstStudent.married) - Number(secondStudent.married)
            : Number(secondStudent.married) - Number(firstStudent.married);
        }));

    case SortType.AverageGrade:
      return (copyStudents
        .sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => {
          function average(student: Student): number {
            return student
              .grades
              .reduce((acc: number, grade: number) => acc + grade, 0)
              / student.grades.length;
          }

          const firstStudentAverage = average(firstStudent);

          const secondStudentAverage = average(secondStudent);

          return order === 'asc'
            ? firstStudentAverage - secondStudentAverage
            : secondStudentAverage - firstStudentAverage;
        }));

    default:
      throw new Error(`unknown sort type: ${sortBy}`);
  }
}
