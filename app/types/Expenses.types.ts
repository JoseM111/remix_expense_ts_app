// Expenses.types.ts
export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date?: Date | string;
};

export type ExpenseListType = {
  expenses: Array<ExpenseType>;
};
// ===================================================

export type ChartBarType = {
  maxValue: number;
  value: number;
  label: string;
};
