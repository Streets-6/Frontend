export const getEventDates = (startDate: number, endDate: number): string => {
  const startDateArray = new Date(startDate)
    .toLocaleString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .split(' ');

  const endDateArray = new Date(endDate)
    .toLocaleString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .split(' ');

  const startDay = startDateArray[0];
  const startMonth = startDateArray[1];
  const startYear = startDateArray[2];

  const endDay = endDateArray[0];
  const endMonth = endDateArray[1];
  const endYear = endDateArray[2];

  const isDaysSame = startDay === endDay;
  const isMonthsSame = startMonth === endMonth;
  const isYearsSame = startYear === endYear;

  return `${startDay}${isMonthsSame && isYearsSame ? '' : ' ' + startMonth}${
    isYearsSame ? '' : ' ' + startYear
  }${isDaysSame && isMonthsSame && isYearsSame ? ' ' : ' - ' + endDay} ${endMonth} ${endYear}`;
};

export const formatPhoneNumber = (phoneNumberString: string): string | null => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    const intlCode = match[1] ? '+7 ' : '';
    return [intlCode, '', match[2], ' ', match[3], ' ', match[4], ' ', match[5]].join('');
  }
  return null;
};
