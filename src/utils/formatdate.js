import dayjs from 'dayjs'

export function formatMonthDay(date,format="M月DD日"){
    return dayjs(date).format(format)
}