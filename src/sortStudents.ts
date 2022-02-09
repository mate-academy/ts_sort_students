
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const avarageSum = (stud: number[]): number => {
  return stud.reduce((a, b) => a + b) / stud.length;
};

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const copy = [...students];

  const final: Student[] = copy.sort((student1: Student, student2: Student) => {
    let numer: number;

    switch (sortBy) {
      case 'name':
        numer = student1[sortBy].localeCompare(student2[sortBy]);
        break;

      case 'surname':
        numer = student1[sortBy].localeCompare(student2[sortBy]);
        break;

      case 'age':
        numer = student1[sortBy] - student2[sortBy];
        break;

      case 'married':
        numer = student1[sortBy] && !student2[sortBy] ? 1 : -1;
        break;

      case 'grades':
        numer = avarageSum(student1[sortBy]) - avarageSum(student2[sortBy]);
        break;

      default:
        return 0;
    }

    if (order !== 'asc') {
      return numer * -1;
    }

    return numer;
  });

  return final;
}
