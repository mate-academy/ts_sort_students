
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

const getAverageGrade = (student: Student): number => {
  return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
      studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

      break;

    case SortType.Married:
    case SortType.Age:
      studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });

      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
      });
      break;

    default:
      throw Error('something went wrong');
  }

  return studentsCopy;
}
