
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(students: Student): number {
  return (students.grades.reduce((sum, grade) => sum + grade)
    / students.grades.length);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? stud1[sortBy].localeCompare(stud2[sortBy])
          : stud2[sortBy].localeCompare(stud1[sortBy]);
      });
      break;

    case SortType.Age:

      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? stud1.age - stud2.age
          : stud2.age - stud1.age;
      });
      break;

    case SortType.Married:

      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? +stud1.married - +stud2.married
          : +stud2.married - +stud1.married;
      });
      break;

    case SortType.AverageGrade:

      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? getAverageGrade(stud1) - getAverageGrade(stud2)
          : getAverageGrade(stud2) - getAverageGrade(stud1);
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
