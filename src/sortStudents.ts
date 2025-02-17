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

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (copyStudents
        .sort((
          firstStudent,
          secondStudent,
        ) => {
          const aValue = firstStudent[sortBy];
          const bValue = secondStudent[sortBy];

          return order === 'asc'
            ? aValue.localeCompare(bValue)
            : Number(!aValue.localeCompare(bValue));
        }));

    case SortType.Age:
    case SortType.Married:
      return (copyStudents
        .sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => {
          return order === 'asc'
            ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
            : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
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
