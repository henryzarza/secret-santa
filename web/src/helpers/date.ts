import { formatRelative } from 'date-fns'

export const prettifyDate = (dateString: string) => {
  return formatRelative(new Date(dateString), new Date())
}
