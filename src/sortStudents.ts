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

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((sum: number, grade: number) => sum + grade)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: string,
): Student[] {
  const copyStudents = students.map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((student1: Student, student2: Student) => (
        order === SortOrder.Ascending
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;

    case SortType.Age:
      copyStudents
        .sort((student1: Student, student2: Student) => (
          order === SortOrder.Ascending
            ? student1[sortBy] - student2[sortBy]
            : student2[sortBy] - student1[sortBy]));
      break;

    case SortType.Married:
      copyStudents.sort((student1: Student, student2: Student) => {
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Ascending) {
          return student1[sortBy] ? 1 : -1;
        }

        return student1[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((student1: Student, student2: Student) => (
        order === SortOrder.Ascending
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1)
      ));
      break;

    default: break;
  }

  return copyStudents;
}
