
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

function getAverageGrades(gradesArray: number[]): number {
  const sumOfGrades = gradesArray.reduce((acc, curr) => acc + curr, 0);
  const avarageAge = sumOfGrades / gradesArray.length;

  return avarageAge;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedStudentsList = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudentsList = sortedStudentsList
        .sort((currStudent, nextStudent) => {
          return order === 'asc'
            ? currStudent[sortBy].localeCompare(nextStudent[sortBy])
            : nextStudent[sortBy].localeCompare(currStudent[sortBy]);
        });

      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudentsList = sortedStudentsList
        .sort((currStudent, nextStudent) => {
          return order === 'asc'
            ? Number(currStudent[sortBy]) - Number(nextStudent[sortBy])
            : Number(nextStudent[sortBy]) - Number(currStudent[sortBy]);
        });

      break;

    case SortType.AverageGrade:
      sortedStudentsList = sortedStudentsList
        .sort((currStudent, nextStudent) => {
          return order === 'asc'
            ? getAverageGrades(currStudent.grades)
              - getAverageGrades(nextStudent.grades)
            : getAverageGrades(nextStudent.grades)
              - getAverageGrades(currStudent.grades);
        });

      break;

    default:
      break;
  }

  return sortedStudentsList;
}
