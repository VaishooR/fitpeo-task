import { emojiData } from "./emojiData";

export const upcomingScheduleData = [
  {
    day: 'Thursday',
    appointments: [
      {
        title: 'Health checkup complete',
        icon: emojiData.syringe || '💉',
        time: '11:00 AM',
        className: 'w60',
      },
      {
        title: 'Ophthalmologist',
        icon: emojiData.eye || '👁',
        time: '14:00 PM',
        className: 'w40',
      },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      {
        title: 'Cardiologist',
        icon: emojiData.red_heart || '❤️',
        time: '12:00 AM',
        className: 'w30',
      },
      {
        title: 'Neurologist',
        icon: emojiData.doctor || '👨🏻‍⚕️',
        time: '16:00 PM',
        className: 'w30',
      },
    ],
  },
];
