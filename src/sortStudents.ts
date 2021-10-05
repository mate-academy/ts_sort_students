// describe Student type
// create and export SortType enum
// create SortOrder type

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function findAverageGrade(student: Student): number {
  const sum: number = student.grades
    .reduce((total: number, grade: number) => total + grade);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? findAverageGrade(a) - findAverageGrade(b)
          : findAverageGrade(b) - findAverageGrade(a);
      });
      break;

    default:
      break;
  }

  return copy;
}
