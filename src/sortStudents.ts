function calculateAvarageGrade(grades: number[]) : number {
  const suma = grades.reduce(
    (acum: number, num: number) => acum + num, 0,
  );

  const avg = suma / grades.length;

  return avg;
}

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
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyStudents = students.map((item: Student) => ({ ...item }));

  copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAvarageGrade(firstStudent[sortBy])
            - calculateAvarageGrade(secondStudent[sortBy])
          : calculateAvarageGrade(secondStudent[sortBy])
            - calculateAvarageGrade(firstStudent[sortBy]);
      default:
        throw new Error('Not valid Data');
    }
  });

  return copyStudents;
}
