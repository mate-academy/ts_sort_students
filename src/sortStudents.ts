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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageMarks(student: Student): number {
  const numberOfMarks: number = student.grades.length;

  return student.grades.reduce((sum, x) => sum + x, 0) / numberOfMarks;
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  // write your function
  const studArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studArr.sort((s1, s2) => s1[sortBy].localeCompare(s2[sortBy]));
      } else {
        studArr.sort((s1, s2) => s2[sortBy].localeCompare(s1[sortBy]));
      }

      break;
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        studArr.sort((s1, s2) => Number(s1[sortBy]) - Number(s2[sortBy]));
      } else {
        studArr.sort((s1, s2) => Number(s2[sortBy]) - Number(s1[sortBy]));
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        studArr.sort((s1, s2) => averageMarks(s1) - averageMarks(s2));
      } else {
        studArr.sort((s1, s2) => averageMarks(s2) - averageMarks(s1));
      }
      break;
    default:
      break;
  }

  return studArr;
}
