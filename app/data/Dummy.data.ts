// Dummy.data.ts

import type { ExpenseType } from "~/types/Expenses.types"

/** DUMMY DATA  */
export const DUMMY_EXPENSE: Array<ExpenseType> = [
	{
		id: 'e1',
		title: 'First Expense',
		amount: 12.99,
		date: new Date().toISOString(),
	},
	{
		id: 'e2',
		title: 'Second Expense',
		amount: 18.99,
		date: new Date().toISOString(),
	},
];
