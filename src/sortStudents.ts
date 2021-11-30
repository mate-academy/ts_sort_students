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
  AverageGrade = 'grades',
}

export enum SortOrder {
  desc = 'desc',
  asc = 'asc',
}

function averageGrade(student: Student): number {
  const totalSum = student.grades.reduce(
    (result: number, grade: number) => result + grade, 0,
  );

  return totalSum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a, b) => {
    let aField: number | string;
    let bField: number | string;

    switch (sortBy) {
      case SortType.Married:
        aField = Number(a[sortBy]);
        bField = Number(b[sortBy]);
        break;
      case SortType.AverageGrade:
        aField = averageGrade(a);
        bField = averageGrade(b);
        break;
      default:
        aField = a[sortBy] as (number | string);
        bField = b[sortBy] as (number | string);
    }

    let sortResult: number = 0;

    if (aField === 'string') {
      sortResult = aField.localeCompare(bField as string);
    } else {
      sortResult = (aField as number) - (bField as number);
    }

    if (order === SortOrder.desc) {
      sortResult = -sortResult;
    }

    return sortResult;
  });

  return studentsCopy;
}
