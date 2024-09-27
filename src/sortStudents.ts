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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  return copiedStudents.sort((studentOne: Student, studentTwo: Student) => {
    const studentOneAverage = getAverageGrade(studentOne.grades);
    const studentTwoAverage = getAverageGrade(studentTwo.grades);

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
        throw new Error('This order is not supported!');
    }
  });
}
