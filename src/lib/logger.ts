import { showLogger } from '@/constant/env'

export function logger(object: unknown, comment?: string): void {
	if (!showLogger) return

	// eslint-disable-next-line no-console
	console.log(
		'%c ============== INFO LOG \n',
		'color: #22D3EE',
		`${typeof window !== 'undefined' && window?.location.pathname}\n`,
		`=== ${comment ?? ''}\n`,
		object
	)
}
