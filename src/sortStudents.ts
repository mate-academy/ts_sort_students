
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

const callback = (sum: number, value: number): number => sum + value;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedStudents: Student[] = [...students];
  const isMarried: Student[] = sortedStudents
    .filter((person) => person.married === true);
  const isNotMarried: Student[] = sortedStudents
    .filter((person) => person.married === false);

  switch (sortBy) {
    case SortType.Name:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student2.name
            .localeCompare(student1.name));
      } else {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student1.name
            .localeCompare(student2.name));
      }
      break;

    case SortType.Surname:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student2.surname
            .localeCompare(student1.surname));
      } else {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student1.surname
            .localeCompare(student2.surname));
      }
      break;

    case SortType.Age:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student2.age - student1.age);
      } else {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student1.age - student2.age);
      }
      break;

    case SortType.Married:
      if (order === 'desc') {
        sortedStudents = [...isMarried, ...isNotMarried];
      } else {
        sortedStudents = [...isNotMarried, ...isMarried];
      }
      break;

    case SortType.AverageGrade:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((a, b) => b.grades
            .reduce(callback) / b.grades.length
            - a.grades
              .reduce(callback) / a.grades.length);
      } else {
        sortedStudents = sortedStudents
          .sort((a, b) => a.grades
            .reduce(callback) / a.grades.length
            - b.grades
              .reduce(callback) / b.grades.length);
      }
      break;

    default:
      break;
  }

  return sortedStudents;
}
