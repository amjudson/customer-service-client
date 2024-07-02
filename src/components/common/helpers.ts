export type SizeOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export const SelectSize = (size: SizeOption) => {
	switch (size) {
		case 'xs':
			return 'col-1'
		case 'sm':
			return 'col-2'
		case 'md':
			return 'col-3'
		case 'lg':
			return 'col-4'
		case 'xl':
			return 'col-5'
		case 'xxl':
			return 'col-6'
		case 'xxxl':
			return 'col-9'
		default:
			return 'col-2'
	}
}
