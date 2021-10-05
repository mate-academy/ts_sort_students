// describe Student type
// create and export SortType enum
// create SortOrder type

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  averageGrade: number,
}

export type SortOrder = 'asc' | 'desc';

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = students.map((person: Student) => {
    const averageGrade = person.grades
      .reduce((a: number, b: number) => a + b) / person.grades.length;
    const student = {
      ...person,
      averageGrade,
    };

    return student;
  });

  return sortedStudents.sort((a:Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.AverageGrade:
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case SortType.Married:
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      default:
        return 0;
    }
  });
}
