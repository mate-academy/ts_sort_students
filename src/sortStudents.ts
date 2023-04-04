export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = JSON.parse(JSON.stringify(students));
  const isItAsc = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfStudents
        .sort((currentStudent: Student, nextStudent: Student) => (
          isItAsc
            ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
            : nextStudent[sortBy].localeCompare(currentStudent[sortBy])
        ));

    case SortType.Age:
      return copyOfStudents
        .sort((currentStudent: Student, nextStudent: Student) => (
          isItAsc
            ? currentStudent.age - nextStudent.age
            : nextStudent.age - currentStudent.age
        ));

    case SortType.Married:
      return copyOfStudents
        .sort((currentStudent: Student, nextStudent: Student) => (
          isItAsc
            ? Number(currentStudent.married) - Number(nextStudent.married)
            : Number(nextStudent.married) - Number(currentStudent.married)
        ));

    case SortType.AverageGrade:
      return copyOfStudents
        .sort((currentStudent: Student, nextStudent: Student) => {
          // eslint-disable-next-line
            const firstStudentAvg: number = calculateAverageOfMarks(currentStudent.grades);
          // eslint-disable-next-line
            const secondStudentAvg = calculateAverageOfMarks(nextStudent.grades);

          return isItAsc
            ? firstStudentAvg - secondStudentAvg
            : secondStudentAvg - firstStudentAvg;
        });

    default:
      throw new Error('Invalid sort type');
  }
}

function calculateAverageOfMarks(marksArray: number[]): number {
  return marksArray.reduce((acc: number, mark: number) => {
    return acc + mark;
  }) / marksArray.length;
}
