
export function convertDecimalToTime(decimalHours: number) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    return `${hours} hours and ${minutes} minutes`;
  }
  