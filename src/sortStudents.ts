
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  return copiedStudents
    .sort((studentOne: Student, studentTwo: Student) => {
      const studentOneAverage = (studentOne.grades)
        .reduce((sum, num) => sum + num, 0) / studentOne.grades.length;

      const studentTwoAverage = (studentTwo.grades)
        .reduce((sum, num) => sum + num, 0) / studentTwo.grades.length;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
            : studentTwo[sortBy].localeCompare(studentOne[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(studentOne[sortBy]) - Number(studentTwo[sortBy])
            : Number(studentTwo[sortBy]) - Number(studentOne[sortBy]);

        case SortType.AverageGrade:
          return order === 'asc'
            ? studentOneAverage - studentTwoAverage
            : studentTwoAverage - studentOneAverage;

        default:
          throw new Error('This order is not suported!');
      }
    });
}
