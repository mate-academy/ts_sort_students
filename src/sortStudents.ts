
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder):Student[] {
  type CopyObjectCallack = (obj: Student) => Student;

  const copyObjectCallack: CopyObjectCallack = (obj) => ({ ...obj });
  const copyStudents: Student[] = students.map(copyObjectCallack);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a: Student, b: Student) => {
        const aGradeAverage: number = a.grades
          .reduce((sum:number, element: number) => sum + element, 0)
          / a.grades.length;

        const bGradeAverage: number = b.grades
          .reduce((sum:number, element: number) => sum + element, 0)
          / b.grades.length;

        return order === 'asc'
          ? aGradeAverage - bGradeAverage
          : bGradeAverage - aGradeAverage;
      });
      break;

    default:
      break;
  }

  return copyStudents;
}
