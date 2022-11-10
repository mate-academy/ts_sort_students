
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
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case 'name':
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => -a[sortBy].localeCompare(b[sortBy]));

    case 'surname':
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => -a[sortBy].localeCompare(b[sortBy]));

    case 'age':
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : copyStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case 'married':
      return order === 'asc'
        ? copyStudents.sort((a:Student, b:Student) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case 'AverageGrade':
      return order === 'asc'
        ? copyStudents.sort((a, b) => {
          const aAverage = a.grades.reduce((x, y) => x + y) / a.grades.length;
          const bAverage = b.grades.reduce((x, y) => x + y) / b.grades.length;

          return aAverage - bAverage;
        })
        : copyStudents.sort((a, b) => {
          const aAverage = a.grades.reduce((x, y) => x + y) / a.grades.length;
          const bAverage = b.grades.reduce((x, y) => x + y) / b.grades.length;

          return bAverage - aAverage;
        });

    default:
      break;
  }

  return copyStudents;
}
