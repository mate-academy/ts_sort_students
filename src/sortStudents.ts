
type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const resultArr: Student[] = [...students];

  switch (sortBy) {
    case (SortType.AverageGrade):
      resultArr.sort((a: Student, b: Student): number => {
        [a, b] = order === 'desc' ? [a, b] : [b, a];

        return (b.grades.reduce((p, c) => p + c, 0) / b.grades.length)
          - (a.grades.reduce((p, c) => p + c, 0) / a.grades.length);
      });
      break;
    case (SortType.Name):
    case (SortType.Surname):
      resultArr.sort((a: Student, b: Student): number => {
        return order === 'desc' ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });
      break;
    case (SortType.Age):
    case (SortType.Married):
      resultArr.sort((a: Student, b: Student): number => {
        return order === 'desc' ? +b[sortBy] - +a[sortBy]
          : +a[sortBy] - +b[sortBy];
      });
      break;
    default:
      break;
  }

  return resultArr;
}
