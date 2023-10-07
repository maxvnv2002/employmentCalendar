export interface IDividedCell {
	isChecked: boolean;
}
export interface ICell {
	value: string | number;
	isHead?: true;
	innerCells: IDividedCell[]
}

export type TRow = ICell[]

export type TTable = TRow[]