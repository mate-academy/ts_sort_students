
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const sortedStudents = copyStudents.sort((student, nextStudent) => {
    switch (sortBy) {
      case SortType.AverageGrade: {
        const studentAverageGrade = student[sortBy]
          .reduce((total, mark) => total + mark) / student[sortBy].length;

        const nextStudentAverageGrade = nextStudent[sortBy]
          .reduce((total, mark) => total + mark) / nextStudent[sortBy].length;

        return order === 'asc'
          ? studentAverageGrade - nextStudentAverageGrade
          : nextStudentAverageGrade - studentAverageGrade;
      }
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(student[sortBy]);

      case SortType.Age: {
        return order === 'asc'
          ? student[sortBy] - (nextStudent[sortBy])
          : nextStudent[sortBy] - (student[sortBy]);
      }

      case SortType.Married: {
        const studentDataBooleanToNum = student[sortBy] ? 1 : 0;
        const nextStudentDataBooleanToNum = nextStudent[sortBy] ? 1 : 0;

        return order === 'asc'
          ? studentDataBooleanToNum - nextStudentDataBooleanToNum
          : nextStudentDataBooleanToNum - studentDataBooleanToNum;
      }
      default:
        return undefined;
    }
  });

  return sortedStudents;
}
