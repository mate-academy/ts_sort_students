// describe Student type
// create and export SortType enum
// create SortOrder type
type SortOrder = 'asc' | 'desc';

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  // write your function
  function calculateAverageGrades(array: number[]): number {
    const result = array.reduce((acc: number, val: number)
    : number => acc + val, 0);

    return result / array.length;
  }

  const copyArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyArr.sort((a: Student, b:Student) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    case SortType.AverageGrade:
      return copyArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? calculateAverageGrades(a[sortBy])
            - calculateAverageGrades(b[sortBy])
          : calculateAverageGrades(b[sortBy])
            - calculateAverageGrades(a[sortBy]);
      });
    case SortType.Age:
      return copyArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
    case SortType.Married:
      return copyArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy]);
      });
    default:
      return copyArr;
  }
}
