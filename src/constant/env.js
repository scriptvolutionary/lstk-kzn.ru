export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const showLogger = isDevelopment ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false
