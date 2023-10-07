export const debounce = <S extends any[], T extends (...args: S) => any>(f: T, delay: number) => {
	let timeoutId: NodeJS.Timer | null = null

	return (...args: S) => {
		if(timeoutId) clearTimeout(timeoutId)
	
		timeoutId = setTimeout(() => {
			f.apply(this, args)
		}, delay)
	}
}