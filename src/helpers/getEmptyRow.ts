import {TRow} from "../types/table";

const dividedCell = [
	{isChecked: false},
	{isChecked: false}
]
const defaultCell = [
	{isChecked: false},
]

export function getEmptyRow(cellCount: number, isDivided: boolean): TRow {
	const cells: TRow = []

	for(let i = 0; i < cellCount; i++) {
			cells.push({
					value: '',
					innerCells: isDivided ? dividedCell : defaultCell
			})
	}

	return cells
}