interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc'|'desc';

function getAverageGrade(studentGrade: number[]): number {
  return studentGrade.reduce((grade1:number, grade2: number) => grade1 + grade2)
    / studentGrade.length;
}

let result: Student[];

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case 'name':
    case 'surname':
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          student1[sortBy].localeCompare(student2[sortBy])))
        : [...students].sort((student1, student2) => (
          student2[sortBy].localeCompare(student1[sortBy])));
      break;
    case 'age':
    case 'married':
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          Number(student1[sortBy]) - Number(student2[sortBy])))
        : [...students].sort((student1, student2) => (
          Number(student2[sortBy]) - Number(student1[sortBy])));
      break;
    case 'averageGrade':
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => {
          return getAverageGrade(student1.grades)
            - getAverageGrade(student2.grades);
        })
        : [...students].sort((student1, student2) => {
          return getAverageGrade(student2.grades)
            - getAverageGrade(student1.grades);
        });
      break;
    default:
      break;
  }

  return result;
}
