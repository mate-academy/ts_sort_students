
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

export type SortOrder = 'asc' | 'desc';

function calcAvg(student: Student): number {
  return student.grades
    .reduce((acum: number, grade: number) => acum + grade, 0)
   / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents
        .sort((aStudent, bStudent) => {
          if (order === 'asc') {
            return aStudent[sortBy].localeCompare(bStudent[sortBy]);
          }

          return bStudent[sortBy].localeCompare(aStudent[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return copiedStudents
        // eslint-disable-next-line
        .sort((aStudent, bStudent) => Number(aStudent[sortBy]) - Number(bStudent[sortBy]));
      }

      return copiedStudents
      // eslint-disable-next-line
        .sort((aStudent, bStudent) => Number(bStudent[sortBy]) - Number(aStudent[sortBy]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        // eslint-disable-next-line
        return copiedStudents.sort((aStudent, bStudent) => calcAvg(aStudent) - calcAvg(bStudent));
      }
      // eslint-disable-next-line
      return copiedStudents.sort((aStudent, bStudent) => calcAvg(bStudent) - calcAvg(aStudent));

    default:
      throw new Error('Error occured!');
  }
}
