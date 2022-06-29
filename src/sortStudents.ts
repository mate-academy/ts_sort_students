
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

  studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
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
          return +student1.married - +student2.married;
        }

        return +student2.married - +student1.married;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return student1.grades
            .reduce((gradeSum, currentGrade) => gradeSum + currentGrade)
            / student1.grades.length
            - student2.grades
              .reduce((gradeSum, currentGrade) => gradeSum + currentGrade)
            / student2.grades.length;
        }

        return student2.grades
          .reduce((gradeSum, currentGrade) => gradeSum + currentGrade)
        / student2.grades.length
        - student1.grades
          .reduce((gradeSum, currentGrade) => gradeSum + currentGrade)
        / student1.grades.length;

      default:
        return 0;
    }
  });

  return studentsCopy;
}
