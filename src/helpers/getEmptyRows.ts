
import { getEmptyRow } from "./getEmptyRow"
import {TTable} from "../types/table";

export function getEmptyRows(count: number, rowLength: number): TTable {
	const rows: TTable = []

	for(let i = 0; i < count; i++) {
			const row = getEmptyRow(rowLength)

			rows.push(row)
	}

	return rows
}