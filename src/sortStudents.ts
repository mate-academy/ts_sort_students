
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const averageGrade = (student: Student): number => student.grades
  .reduce((sum, grade) => sum + grade) / student.grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copie: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return copie.sort((studentA: Student, studentB: Student) => {
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        return studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case (SortType.Age):
    case (SortType.Married):
      return copie.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));

    case (SortType.AverageGrade):
      return copie.sort((studentA: Student, studentB: Student) => {
        const averageA = averageGrade(studentA);
        const averageB = averageGrade(studentB);

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      });

    default: throw new Error('Something went wrong');
  }
}
