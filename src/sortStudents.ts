
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: (number)[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrades = 'grades',
}

export type SortOrder = 'desc' | 'asc';

function getAverageGrade(studentGrades: (number)[]): number {
  const sumOfGrades = studentGrades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0);

  return sumOfGrades / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy = studentsCopy.sort((stud1, stud2) =>
        { return order === 'asc'
          ? stud1[sortBy].localeCompare(stud2[sortBy])
          : stud2[sortBy].localeCompare(stud1[sortBy]);
        });

      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy = studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? Number(stud1[sortBy]) - Number(stud2[sortBy])
          : Number(stud2[sortBy]) - Number(stud1[sortBy]);
      });

      break;

    case SortType.AverageGrades:
      studentsCopy = studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? getAverageGrade(stud1.grades) - getAverageGrade(stud2.grades)
          : getAverageGrade(stud2.grades) - getAverageGrade(stud1.grades);
      });

      break;

    default:
      break;
  };

  return studentsCopy;
};
