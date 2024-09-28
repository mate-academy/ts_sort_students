
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

const findAverageGrade = (student: Student): number => {
  return student.grades.reduce((acc, prev) => acc + prev, 0)
    / student.grades.length;
};

export function sortStudents(
  students: Student[], sortBy: string, order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((student1, student2) => {
        return order === 'desc'
          ? student2[sortBy].localeCompare(student1[sortBy])
          : student1[sortBy].localeCompare(student2[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((student1, student2) => {
        return order === 'desc'
          ? Number(student2[sortBy]) - Number(student1[sortBy])
          : Number(student1[sortBy]) - Number(student2[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((student1, student2) => {
        return order === 'desc'
          ? findAverageGrade(student2) - findAverageGrade(student1)
          : findAverageGrade(student1) - findAverageGrade(student2);
      });

    default:
      return studentsCopy;
  }
}
