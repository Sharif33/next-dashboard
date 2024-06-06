"use client";

import { useMemo, useState } from "react";

const useSalaryCount = () => {
  const [workingDays, setWorkingDays] = useState(22);
  const [basicSalaryPerMonth, setBasicSalaryPerMonth] = useState(620);
  const [workingHoursPerDay, setWorkingHoursPerDay] = useState(7);
  const [totalWorkingHours, setTotalWorkingHours] = useState(154);
  const [purchaseFee, setPurchaseFee] = useState(0);

  // Calculate monthly working hours
  const monthlyWorkingHours = useMemo(
    () => workingDays * workingHoursPerDay,
    [workingDays, workingHoursPerDay]
  );

  // Calculate salary per day and per hour
  const salaryPerDay = useMemo(
    () => (basicSalaryPerMonth / workingDays).toFixed(2),
    [basicSalaryPerMonth, workingDays]
  );

  const salaryPerHour = useMemo(
    () => (basicSalaryPerMonth / monthlyWorkingHours).toFixed(2),
    [basicSalaryPerMonth, monthlyWorkingHours]
  );

  // Calculate extra working hours and days
  const extraWorkingHours = totalWorkingHours - monthlyWorkingHours;

  const extraWorkingDays = useMemo(() => {
    const days = extraWorkingHours / workingHoursPerDay;
    return Number.isInteger(days) ? days.toFixed(0) : days.toFixed(1);
  }, [extraWorkingHours, workingHoursPerDay]);

  // Calculate total worked days and total salary
  const totalWorkedDays = useMemo(() => {
    const days = workingDays + parseFloat(extraWorkingDays);
    return Number.isInteger(days) ? days.toFixed(0) : days.toFixed(1);
  }, [workingDays, extraWorkingDays]);

  const totalSalary = useMemo(() => {
    const extraDaysSalary =
      parseFloat(extraWorkingDays) * parseFloat(salaryPerDay);
    const total = basicSalaryPerMonth + extraDaysSalary + purchaseFee;
    return Number.isInteger(total) ? total.toFixed(0) : total.toFixed(1);
  }, [basicSalaryPerMonth, extraWorkingDays, salaryPerDay, purchaseFee]);

  return {
    workingDays,
    setWorkingDays,
    basicSalaryPerMonth,
    setBasicSalaryPerMonth,
    workingHoursPerDay,
    setWorkingHoursPerDay,
    totalWorkingHours,
    setTotalWorkingHours,
    purchaseFee,
    setPurchaseFee,
    monthlyWorkingHours,
    salaryPerDay,
    salaryPerHour,
    extraWorkingHours,
    extraWorkingDays,
    totalWorkedDays,
    totalSalary,
  };
};

export default useSalaryCount;
