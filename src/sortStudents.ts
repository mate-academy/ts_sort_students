export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  name = 'name',
  surname = 'surname',
  age = 'age',
  married = 'married',
  averageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function getAverage(grades: number[]): number {
  return grades.reduce((average, grade) => average + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.name:
    case SortType.surname:
      copyStudents.sort((studentOne, studentTwo) => (
        order === 'asc'
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy])
      ));
      break;

    case SortType.age:
    case SortType.married:
      copyStudents.sort((studentOne, studentTwo) => (
        order === 'asc'
          ? +studentOne[sortBy] - +studentTwo[sortBy]
          : +studentTwo[sortBy] - +studentOne[sortBy]
      ));
      break;

    case SortType.averageGrade:
      copyStudents.sort((studentOne, studentTwo) => (
        order === 'asc'
          ? getAverage(studentOne.grades) - getAverage(studentTwo.grades)
          : getAverage(studentTwo.grades) - getAverage(studentOne.grades)
      ));
      break;

    default: {
      return [];
    }
  }

  return copyStudents;
}
