
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
  AverageGrade = 'calculateAverageGrade',
}

// create SortOrder type
export type SortOrder = {
  asc: string,
  desc: string,
};

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: string): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(firstStudent.grades)
          - calculateAverageGrade(secondStudent.grades)
          : calculateAverageGrade(secondStudent.grades)
          - calculateAverageGrade(firstStudent.grades);

      default:
        return 0;
    }
  });

  return newStudents;
}
