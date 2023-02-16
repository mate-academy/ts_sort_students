export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce((a:number, b:number) => a + b) / student.grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  let array = students.sort((firstStudent: Student, secondStudent: Student) => {
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
            ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
            : getAverageGrade(secondStudent) - getAverageGrade(firstStudent);
      }
    });

    return array
}
