
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

function getAvarageGrade(student: Student): number {
  return student.grades.reduce((sum, grade) => sum + grade, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents
    .sort((firstStudent, secondStudent) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return (order === 'asc')
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : firstStudent[sortBy].localeCompare(secondStudent[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return (order === 'asc')
            ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
            : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

        case SortType.AverageGrade:
          return (order === 'asc')
            ? getAvarageGrade(firstStudent) - getAvarageGrade(secondStudent)
            : getAvarageGrade(secondStudent) - getAvarageGrade(firstStudent);

        default:
          throw new Error(`Function can't sort by ${sortBy} type!`);
      }
    });
}
