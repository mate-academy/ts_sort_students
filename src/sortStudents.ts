
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

export type SortOrder = 'desc' | 'asc';

function findAverageGrade(studentGrades:number[]):number {
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
  let copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents = copyStudents.sort((student1: Student,
        student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents = copyStudents.sort((student1: Student,
        student2: Student) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });

      break;

    case SortType.AverageGrade:
      copyStudents = copyStudents.sort((student1: Student,
        student2: Student) => {
        return order === 'asc'
          ? findAverageGrade(student1.grades)
            - findAverageGrade(student2.grades)
          : findAverageGrade(student2.grades)
            - findAverageGrade(student1.grades);
      });

      break;

    default:
      break;
  }

  return copyStudents;
}
