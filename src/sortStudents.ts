// describe Student type
type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  // write your function

  switch (sortBy) {
    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => {
        const prev
          = a[sortBy].reduce((start, end) => start + end, 0) / a[sortBy].length;
        const next
          = b[sortBy].reduce((start, end) => start + end, 0) / b[sortBy].length;

        return (order === 'desc') ? next - prev : prev - next;
      });

      return sortedStudents;

    case SortType.Age:
      return (
        (order === 'desc')
          ? sortedStudents.sort((a, b) => b[sortBy] - a[sortBy])
          : sortedStudents.sort((a, b) => a[sortBy] - b[sortBy])
      );

    case SortType.Name:
    case SortType.Surname:
      return (
        (order === 'desc')
          ? sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
          : sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      );

    default:
      sortedStudents.sort((a, b) => {
        if (a[sortBy] && !b[sortBy]) {
          return (order === 'desc') ? -1 : 1;
        }

        if (!a[sortBy] && b[sortBy]) {
          return (order === 'desc') ? 1 : -1;
        }

        return 0;
      });

      return sortedStudents;
  }
}
