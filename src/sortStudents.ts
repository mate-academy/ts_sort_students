
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname ='surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averagegrades',
}

export type SortOrder = 'asc'|'desc';

function getAverageGrades(grades:number[]):number {
  return (grades
    .reduce((sum, grade) => sum + grade) / grades.length);
}

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order:SortOrder,
) :Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        if (order === 'asc') {
          return a.married ? 1 : -1;
        }

        return a.married ? -1 : 1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(a.grades) - getAverageGrades(b.grades)
          : getAverageGrades(b.grades) - getAverageGrades(a.grades);

      default:
        throw new Error('Invalid data');
    }
  });

  return sortedStudents;
}
