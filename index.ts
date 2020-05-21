const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 1 * 60 * 1000

const GMT8OFFSET = 8 * 1 * 24 * 60 * 60 * 1000

export function getGMT8LocalDate(unixTimestamp: number): Date {
  let t = unixTimestamp * 1000
  t = t + TIMEZONE_OFFSET
  t = t + GMT8OFFSET
  return new Date(t)
}