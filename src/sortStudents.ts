
interface Student {
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

type SortOrder = 'asc' | 'desc';

function getAvarageGrade(student: Student): number {
  const summOfGrades: number = student.grades.reduce(
    (a, b) => a + b,
    0,
  );

  return summOfGrades / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let callBack;
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      callBack
        = (a: Student, b: Student): number => {
          return (order === 'asc')
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        };
      break;

    case SortType.Age:
      callBack = (a: Student, b: Student): number => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      };
      break;

    case SortType.Married:
      callBack = (a: Student, b: Student): number => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      };
      break;

    case SortType.AverageGrade:
      callBack = (a: Student, b: Student): number => {
        return (order === 'asc')
          ? getAvarageGrade(a) - getAvarageGrade(b)
          : getAvarageGrade(b) - getAvarageGrade(a);
      };
      break;

    default:
      callBack = (): 0 => {
        return 0;
      };
  }

  const sorted: Student[] = studentsCopy.sort(callBack);

  return sorted;
}
