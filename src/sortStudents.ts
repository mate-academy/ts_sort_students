
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
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
// export type SortOrder;
export type SortOrder = 'asc' | 'desc';

function averageGrade(student:Student):number {
  return student.grades
    .reduce((acc:number, current: number) => acc + current, 0)
    / student.grades.length;
}


// export function sortStudents(students, sortBy, order) {
//   // write your function
// }
export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);
        case SortType.AverageGrade:
          return order === 'asc'
            ? averageGrade(a) - averageGrade(b)
            : averageGrade(b) - averageGrade(a);
        default:
          throw new Error(`Invalid sort type: ${sortBy}`);
      }
    });
}