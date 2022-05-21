export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export function getAverageAge(student: Student): number {
  return student.grades.reduce(
    (firstStudent, secondStudent) => firstStudent + secondStudent, 0,
  ) / student.grades.length;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  let callback: (firstStudent: Student, secondStudent: Student) => number;

  switch (sortBy) {
    case 'age':
      callback = (firstStudent: Student, secondStudent: Student):number => (
        order === 'asc'
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy]
      );
      break;
    case 'married':
      callback = (firstStudent: Student, secondStudent: Student):number => (
        order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy]
      );
      break;
    case 'grades':
      callback = (firstStudent: Student, secondStudent: Student):number => (
        order === 'asc'
          ? getAverageAge(firstStudent) - getAverageAge(secondStudent)
          : getAverageAge(secondStudent) - getAverageAge(firstStudent)
      );
      break;
    case 'name':
    case 'surname':
      callback = (firstStudent: Student, secondStudent: Student):number => (
        order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      );
      break;
    default:
      return [];
  }

  return copyStudents.sort(callback);
}
