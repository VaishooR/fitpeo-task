import { emojiData } from "./emojiData";

export const calendarScheduleData = [
  {
    day: 'Mon',
    date: 25,
    isToday: false,
    slots: [
      { time: '10:00', active: false, disabled: false },
      { time: '11:00', active: false, disabled: false },
      { time: '12:00', active: false, disabled: false },
    ],
  },
  {
    day: 'Tues',
    date: 26,
    isToday: true,
    slots: [
      { time: '08:00', active: false, disabled: false },
      { time: '09:00', active: true, disabled: false },
      { time: '10:00', active: false, disabled: false },
    ],
  },
  {
    day: 'Wed',
    date: 27,
    isToday: false,
    slots: [
      { time: '12:00', active: false, disabled: false },
      { time: emojiData.null || '-', active: false, disabled: false },
      { time: '13:00', active: false, disabled: false },
    ],
  },
  {
    day: 'Thurs',
    date: 28,
    isToday: false,
    slots: [
      { time: '10:00', active: false, disabled: false },
      { time: '11:00', active: true, disabled: true },
      { time: emojiData.null || '-', active: false, disabled: false },
    ],
  },
  {
    day: 'Fri',
    date: 29,
    isToday: false,
    slots: [
      { time: emojiData.null || '-', active: false, disabled: false },
      { time: '14:00', active: false, disabled: false },
      { time: '16:00', active: false, disabled: false },
    ],
  },
  {
    day: 'Sat',
    date: 30,
    isToday: false,
    slots: [
      { time: '12:00', active: true , disabled: true},
      { time: '14:00', active: false, disabled: false },
      { time: '15:00', active: false, disabled: false },
    ],
  },
  {
    day: 'Sun',
    date: 31,
    isToday: false,
    slots: [
      { time: '09:00', active: true, disabled: true },
      { time: '10:00', active: false, disabled: true },
      { time: '11:00', active: false, disabled: true },
    ],
    disableAll: true, 
  },
];
