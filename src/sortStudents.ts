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

function averageGrades(grades: number[]): number {
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
      return order === 'asc'
        ? studentsList
          .sort((studA: Student, studB: Student) => (
            studA[sortBy].localeCompare(studB[sortBy])
          ))
        : studentsList
          .sort((studA: Student, studB: Student) => (
            studA[sortBy].localeCompare(studB[sortBy])
          ));

    case SortType.Age:
    case SortType.AverageGrade:
    case SortType.Married:
      return order === 'asc'
        ? studentsList
          .sort((studA: Student, studB: Student) => {
            if (sortBy === SortType.Age) {
              return studA[sortBy] - studB[sortBy];
            }

            if (sortBy === SortType.Married) {
              return Number(studA[sortBy]) - Number(studB[sortBy]);
            }

            return averageGrades(studA[sortBy]) - averageGrades(studB[sortBy]);
          })
        : studentsList
          .sort((studA: Student, studB: Student) => {
            if (sortBy === SortType.Age) {
              return studB[sortBy] - studA[sortBy];
            }

            if (sortBy === SortType.Married) {
              return Number(studB[sortBy]) - Number(studA[sortBy]);
            }

            return averageGrades(studB[sortBy]) - averageGrades(studA[sortBy]);
          });

    default:
      return studentsList;
  }
}
