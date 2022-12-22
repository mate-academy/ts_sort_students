
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

function getAverageGrades({ grades }: Student): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Married:
      return sortedStudents.sort((student1: Student, student2: Student) => (
        Number(student2.married) - Number(student1.married)
      ));

    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? getAverageGrades(student1) - getAverageGrades(student2)
          : getAverageGrades(student2) - getAverageGrades(student1);
      });

    default:
      throw new Error('All of three parameters need to be given');
  }
}
