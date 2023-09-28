import momentJalali from 'moment-jalaali'

export default function formatTime(date) {
  return momentJalali(date).format('jYYYY/jM/jD HH:mm:ss')
}