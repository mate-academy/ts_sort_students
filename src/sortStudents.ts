
export interface Student {
  name:string,
  surname: string,
  age: number,
  married:boolean,
  grades:number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

function avaregeGrades(grades:number[]):number {
  return grades.reduce((sum, value) => sum + value) / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentList:Student[] = [...students];

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        );
      }

      return studentList.sort(
        (a, b) => b[sortBy].localeCompare(a[sortBy]),
      );

    case SortType.Age:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a.age - b.age,
        );
      }

      return studentList.sort(
        (a, b) => b.age - a.age,
      );

    case SortType.Married:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => {
            if (a.married && b.married) {
              return 0;
            }

            if (a.married) {
              return 1;
            }

            return -1;
          },
        );
      }

      return studentList.sort(
        (a, b) => {
          if (a.married && b.married) {
            return 0;
          }

          if (a.married) {
            return -1;
          }

          return 1;
        },
      );
    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => avaregeGrades(a.grades) - avaregeGrades(b.grades),
        );
      }

      return studentList.sort(
        (a, b) => avaregeGrades(b.grades) - avaregeGrades(a.grades),
      );
    default:
      return students;
  }
}
