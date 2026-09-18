export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction = order === 'asc' ? 1 : -1;

  const getAverageGrade = (grades: number[]): number => {
    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
  };

  return students
    .map((student, index) => ({
      student, index,
    }))
    .sort((first, second) => {
      let comparison = 0;

      switch (sortBy) {
        case SortType.Name:
          comparison = first.student.name.localeCompare(second.student.name);
          break;

        case SortType.Surname:
          comparison = first.student.surname.localeCompare(
            second.student.surname,
          );
          break;

        case SortType.Age:
          comparison = first.student.age - second.student.age;
          break;

        case SortType.Married:
          comparison
            = Number(first.student.married) - Number(second.student.married);
          break;

        case SortType.AverageGrade:
          comparison
            = getAverageGrade(first.student.grades)
            - getAverageGrade(second.student.grades);
          break;

        default:
          comparison = 0;
      }

      if (comparison === 0) {
        return first.index - second.index;
      }

      return comparison * direction;
    })
    .map(({ student }) => student);
}
