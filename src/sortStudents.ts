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

function averageGrade(person: Student): number {
  return person.grades.reduce(
    (acum: number, prev: number) => acum + prev, 0,
  ) / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents
        .sort((firstStudent, secondStudent) => {
          return order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
      });

    case SortType.AverageGrade:
      return copyStudents.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? averageGrade(firstStudent) - averageGrade(secondStudent)
          : averageGrade(secondStudent) - averageGrade(firstStudent);
      });

    default:
      throw new Error('Error! Check your input values');
  }
}
