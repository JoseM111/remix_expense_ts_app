// types.ts
import type { DataFunctionArgs } from "@remix-run/node"
// ============================================================

// type for the remix DataFunctionArgs inside remix server functions
export type DataArgParams = {
	request: DataFunctionArgs['request'];
	params: DataFunctionArgs['params'];
};
// ============================================================
