
export interface Student {
  // describe Student interface
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copy = [...students];
  const asc = order === 'asc';
  const getAverageGrade = (grades: number[]): number => {
    return grades
      .reduce((grade1, grade2) => grade1 + grade2, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Age:
      copy.sort((a, b) => (asc ? a.age - b.age : b.age - a.age));
      break;
    case SortType.Name:
      copy.sort((a, b) => (asc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));
      break;
    case SortType.Surname:
      copy.sort((a, b) => (asc
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));
      break;
    case SortType.Married:
      copy.sort((a, b) => (asc
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
      break;
    case SortType.AverageGrade:
      copy.sort((a, b) => (asc
        ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
        : getAverageGrade(b.grades) - getAverageGrade(a.grades)));
      break;
    default:
      return copy;
  }

  return copy;
}
