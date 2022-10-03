export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function avGrades(grades: number[]): number {
  return grades.reduce((acc: number, curr: number) => (
    acc + curr
  ), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsList: Student[] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsList
        .sort((studA: Student, studB: Student) => {
          return order === 'asc'
            ? studA[sortBy].localeCompare(studB[sortBy])
            : studA[sortBy].localeCompare(studB[sortBy]);
        });

    case SortType.Age:
    case SortType.AverageGrade:
    case SortType.Married:
      return studentsList
        .sort((studA: Student, studB: Student) => {
          if (sortBy === SortType.AverageGrade) {
            return order === 'asc'
              ? avGrades(studA[sortBy]) - avGrades(studB[sortBy])
              : avGrades(studB[sortBy]) - avGrades(studA[sortBy]);
          }

          return order === 'asc'
            ? Number(studA[sortBy]) - Number(studB[sortBy])
            : Number(studB[sortBy]) - Number(studA[sortBy]);
        });

    default:
      return studentsList;
  }
}
