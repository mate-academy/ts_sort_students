
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsList: Student[] = [...students];

  function getAverageValue(student: Student): number {
    const averageValue = student.grades.reduce((sum, num) => sum + num, 0)
     / student.grades.length;

    return averageValue;
  }

  const directions = {
    asc: 1,
    desc: -1,
  };

  studentsList.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return directions[order]
        * studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return directions[order]
          * (+(studentA[sortBy]) - +(studentB[sortBy]));

      case SortType.AverageGrade:
        return directions[order]
          * (getAverageValue(studentA) - getAverageValue(studentB));
      default:
        return 0;
    }
  });

  return studentsList;
}
