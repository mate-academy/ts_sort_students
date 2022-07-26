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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
) : Student [] {
  const studentsCopy = [...students];
  const averageGrade = (student: Student): number => student.grades
    .reduce((a, b) => a + b, 0) / student.grades.length;

  studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2.name.localeCompare(student1.name);
      case SortType.Surname:
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2.name.localeCompare(student1.name);

      case SortType.Age:
        if (order === 'asc') {
          return student1.age - student2.age;
        }

        return student2.age - student1.age;

      case SortType.Married:
        if (order === 'asc') {
          return Number(student1.married) - Number(student2.married);
        }

        return +student2.married - +student1.married;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageGrade(student1) - averageGrade(student2);
        }

        return averageGrade(student2) - averageGrade(student1);

      default:
        return 0;
    }
  });

  return studentsCopy;
}
