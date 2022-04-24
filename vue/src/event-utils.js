
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day 123123event',
    start: todayStr + 'T02:00:00',
    end: todayStr + 'T04:00:00'

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: 'ccc event',
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T13:00:00'
  },
   {
    id: createEventId(),
    title: 'ccc event',
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T13:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
