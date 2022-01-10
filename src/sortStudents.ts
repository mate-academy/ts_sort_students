
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case 'name':
    case 'surname':
      return studentsCopy.sort(
        (el1, el2) => el1[sortBy].localeCompare(el2[sortBy]),
      );

    case 'married':
    case 'age':
      if (order === 'desc') {
        return studentsCopy.sort((el1, el2) => el2[sortBy] - el1[sortBy]);
      }

      return studentsCopy.sort((el1, el2) => el1[sortBy] - el2[sortBy]);

    case 'averageGrade':
      return studentsCopy.sort((el1: Student, el2: Student) => {
        const st1 = (el1.grades.reduce((a, b) => a + b, 0)) / el1.grades.length;
        const st2 = (el2.grades.reduce((a, b) => a + b, 0)) / el2.grades.length;

        return (order === 'desc' ? st2 - st1 : st1 - st2);
      });

    default:
      return studentsCopy;
  }
}
