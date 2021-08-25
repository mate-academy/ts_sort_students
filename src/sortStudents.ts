// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
// create and export SortType enum
export enum SortType {
  Name ='name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsForSort:Student[] = [...students];
  const sum = (prev: number, curr: number): number => {
    return prev + curr;
  };

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsForSort
          .sort((student1, student2) => student1.name
            .localeCompare(student2.name));
      } else {
        studentsForSort.reverse();
      }

      return studentsForSort;

    case SortType.Surname:
      if (order === 'asc') {
        studentsForSort
          .sort((student1, student2) => student1.surname
            .localeCompare(student2.surname));
      } else {
        studentsForSort.reverse();
      }

      return studentsForSort;

    case SortType.Age:
      if (order === 'asc') {
        studentsForSort
          .sort((student1, student2) => student1.age
            - student2.age);
      } else {
        studentsForSort
          .sort((student1, student2) => student2.age
            - student1.age);
      }

      return studentsForSort;

    case SortType.Married:
      if (order === 'asc') {
        studentsForSort
          .sort((student1, student2) => +student1.married
            - +student2.age);
      } else {
        studentsForSort
          .sort((student1, student2) => +student2.married
            - +student1.married);
      }

      return studentsForSort;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsForSort
          .sort((student1, student2) => student1.grades.reduce(sum, 0)
            - student2.grades.reduce(sum));
      } else {
        studentsForSort
          .sort((student1, student2) => student2.grades.reduce(sum, 0)
            - student1.grades.reduce(sum));
      }

      return studentsForSort;

    default:
      throw new Error('Invalid data');
  }
}
