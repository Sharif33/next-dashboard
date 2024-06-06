"use client";

// suppose we have a function that takes hours and minutes as arguments and returns a string in the format "HH:MM". We can create a utility function to format hours and minutes in the required format.

export const formatHoursMinutes = (hours: number, minutes: number) => {
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

// create a function that take hh:mm as input and return 0h 0m format.

export const formatHoursMinutesToHoursMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const formattedHours = hours === 0 ? "" : `${hours} h`;
  const formattedMinutes = minutes === 0 ? "" : `${minutes} m`;
  return `${formattedHours} ${formattedMinutes}`;
};

//create a function that input total hours and returns the total hours and minutes in the format "HH:MM".

export const formatTotalHoursMinutes = (totalHours: number) => {
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

// now create a function for calculating the total working hours from the start time and end time.

export const calculateTotalWorkingHours = (
  startTime: string | number,
  endTime: string | number
) => {
  const [startHours, startMinutes] = String(startTime).split(":").map(Number);
  const [endHours, endMinutes] = String(endTime).split(":").map(Number);

  // Convert all times to minutes
  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;

  // Calculate the difference in minutes
  const totalWorkedMinutes = endTotalMinutes - startTotalMinutes;

  // Determine if the difference is negative
  const isNegative = totalWorkedMinutes < 0;

  // Calculate the absolute difference in minutes
  const absoluteWorkedMinutes = Math.abs(totalWorkedMinutes);

  // Convert back to hours and minutes
  const finalHours = Math.floor(absoluteWorkedMinutes / 60);
  const finalMinutes = absoluteWorkedMinutes % 60;

  // Format the result with a negative sign if needed
  const sign = isNegative ? "-" : "";

  return finalMinutes === 0
    ? `${sign}${finalHours} h`
    : `${sign}${finalHours} h ${finalMinutes} m`;
};

// calculate the extra days from calculateTotalWorkingHours function.

export const calculateExtraDays = (
  totalWorkingHours: string,
  workingHoursPerDay: number
) => {
  const [hours, minutes] = totalWorkingHours.split(":").map(Number);
  const totalHours = hours + minutes / 60;
  const workingDays = Math.abs(totalHours / workingHoursPerDay).toFixed(1);
  const extraHours = totalHours % workingHoursPerDay;
  const extraDays = (extraHours / workingHoursPerDay).toFixed(1);
  return { workingDays, extraDays };
};

// now calculate the working day and working hours per day.

export const calculateWorkingDaysAndHours = (
  totalWorkingHours: string,
  workingHoursPerDay: number
) => {
  const [hours, minutes] = totalWorkingHours.split(":").map(Number);
  const totalHours = hours + minutes / 60;
  const workingDays = Math.floor(totalHours / workingHoursPerDay);
  const workingHours = totalHours % workingHoursPerDay;
  return { workingDays, workingHours };

  // example usage: calculateWorkingDaysAndHours("40:30", 8);
  // returns { workingDays: 5, workingHours: 0.5 }
};

// now calculate the total worked days and total salary.

export const calculateTotalSalary = (
  salaryPerHour: number,
  totalWorkingHours: string,
  extraSalary: number
) => {
  const [hours, minutes] = totalWorkingHours.split(":").map(Number);
  const totalHours = hours + minutes / 60;
  const totalSalary = totalHours * salaryPerHour;
  const totalSalaryWithBasic = totalSalary + extraSalary;
  return { totalHours, totalSalary, totalSalaryWithBasic };
};
