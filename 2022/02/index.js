export function countHours(year, holidays) {
  const getDayNumber = holiday => new Date(`${holiday}, ${year}`).getDay()

  return (
    holidays.filter(
      holiday => getDayNumber(holiday) > 0 && getDayNumber(holiday) <= 5
    ).length * 2
  )
}
