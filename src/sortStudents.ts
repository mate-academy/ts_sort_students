
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((aver, grade) => aver + grade, 0) / grades.length;
}

export function sortStudents(students:Student[], sortBy:SortType,
  order:SortOrder): Student[] {
  const copyArrayStudent = [...students];

  return copyArrayStudent.sort((prevStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(prevStudent[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(prevStudent)
            - calculateAverageGrade(nextStudent)
          : calculateAverageGrade(nextStudent)
            - calculateAverageGrade(prevStudent);

      default:
        throw new Error();
    }
  });
}
