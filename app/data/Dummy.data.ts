// Dummy.data.ts

import { FaHandshake, FaTrophy } from "react-icons/fa"
import type { ExpenseType } from "~/types/Expenses.types"
import type { PricingType } from "~/types/Marketing.types"

/** DUMMY EXPENSE  */
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

export const PRICING_PLANS: Array<PricingType> = [
	{
		id: 'p1',
		title: 'Basic',
		price: 'Free forever',
		perks: ['1 User', 'Up to 100 expenses/year', 'Basic analytics'],
		icon: FaHandshake
	},
	{
		id: 'p2',
		title: 'Pro',
		price: '$9.99/month',
		perks: ['Unlimited Users', 'Unlimited expenses/year', 'Detailed analytics'],
		icon: FaTrophy
	},
];

