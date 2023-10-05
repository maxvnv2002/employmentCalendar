import {TRow} from "../types/table";


export function getEmptyRow(cellCount: number): TRow {
	const cells: TRow = []

	for(let i = 0; i < cellCount; i++) {
			cells.push({
					value: '',
					checked: false
			})
	}

	return cells
}