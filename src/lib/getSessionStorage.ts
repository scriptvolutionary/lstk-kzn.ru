export function getSessionStorage(key: string): string | null {
	if (typeof sessionStorage !== 'undefined') return sessionStorage.getItem(key)

	return null
}
