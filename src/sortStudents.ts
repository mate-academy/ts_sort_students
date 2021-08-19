type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

enum SortType {
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const reducer = (sum: number, grade: number): number => sum + grade;

  studentsCopy.sort((a: Student, b: Student) => {
    const aCopy: Student = order === SortOrder.Ascending ? { ...a } : { ...b };
    const bCopy: Student = order === SortOrder.Ascending ? { ...b } : { ...a };

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return aCopy[sortBy].localeCompare(bCopy[sortBy]);
      case SortType.Married:
        if (aCopy[sortBy] === bCopy[sortBy]) {
          return 0;
        }

        return aCopy[sortBy] ? 1 : -1;
      case SortType.Age:
        return aCopy[sortBy] - bCopy[sortBy];
      case SortType.AverageGrade:
        return aCopy[sortBy].reduce(reducer, 0)
        - bCopy[sortBy].reduce(reducer, 0);
      default:
        return 0;
    }
  });

  return studentsCopy;
}

export { SortType };
