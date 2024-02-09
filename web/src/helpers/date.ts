import { formatRelative, format } from 'date-fns'

export const prettifyDate = (dateString: string) => {
  return formatRelative(new Date(dateString), new Date())
}

export const formatDateFromDB = (dateString: string) => {
  return format(new Date(dateString), 'yyyy-MM-dd')
}
