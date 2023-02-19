
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student2[sortBy]);

      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);

      case SortType.Married:
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? (student1.grades.reduce((a, b) => a + b, 0)
            / student1.grades.length)
            - (student2.grades.reduce((a, b) => a + b, 0)
              / student2.grades.length)
          : (student2.grades.reduce((a, b) => a + b, 0)
            / student2.grades.length)
            - (student1.grades.reduce((a, b) => a + b, 0)
              / student1.grades.length);

      default:
        return 0;
    }
  });

  return studentsCopy;
}
