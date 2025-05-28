import { emojiData } from "./emojiData";

export const appointmentData = [
  {
    title: 'Dentist',
    icon: emojiData.tooth || '🦷',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    type: 'primary',
  },
  {
    title: 'Physiotherapy Appointment',
    icon: emojiData.bicep ||'💪',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    type: 'secondary',
  }
];
