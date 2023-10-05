
export interface ICell {
	value: string | number;
	checked: boolean;
	isHead?: true;
}

export type TRow = ICell[]

export type TTable = TRow[]