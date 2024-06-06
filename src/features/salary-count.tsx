"use client";

import SalaryInput from "@/components/input/salary-input";
import {
  calculateExtraDays,
  calculateTotalSalary,
  calculateTotalWorkingHours,
  formatHoursMinutes,
  formatHoursMinutesToHoursMinutes,
  formatTotalHoursMinutes,
} from "@/utils/formate-hours-minutes";
import { useEffect, useState } from "react";

console.log(calculateTotalWorkingHours("154:00", "157:37"));

const SalaryCount = () => {
  const [workingDays, setWorkingDays] = useState(22);
  const [workingHoursPerDay, setWorkingHoursPerDay] = useState(7);
  const [basicSalaryPerMonth, setBasicSalaryPerMonth] = useState(620);

  const workHours = workingDays * workingHoursPerDay;
  const salaryPerHour = basicSalaryPerMonth / workHours;
  const salaryPerDay = (basicSalaryPerMonth / workingDays).toFixed(2);

  const [totalWorkingHours, setTotalWorkingHours] = useState({
    hours: 0,
    minutes: 0,
  });

  const [purchaseFee, setPurchaseFee] = useState(0);

  useEffect(() => {
    setTotalWorkingHours({
      hours: Math.floor(workHours),
      minutes: Math.round((workHours - Math.floor(workHours)) * 60),
    });
  }, [workHours]);

  // Calculate monthly working hours
  const monthlyWorkingHours = formatTotalHoursMinutes(workHours);
  const totalWorkingHoursInHours = formatHoursMinutes(
    totalWorkingHours.hours,
    totalWorkingHours.minutes
  );
  const totalWorkingHoursInMinutes = calculateTotalWorkingHours(
    monthlyWorkingHours,
    totalWorkingHoursInHours
  );

  const extraDays = calculateExtraDays(
    totalWorkingHoursInHours,
    workingHoursPerDay
  );

  const totalSalary = calculateTotalSalary(
    salaryPerHour,
    totalWorkingHoursInHours,
    purchaseFee
  );

  return (
    <div className="p-6 bg-white rounded-xl m-auto shadow-lg">
      <h1 className="text-xl mb-3 font-semibold">Salary Count</h1>
      <div className="flex gap-6">
        {/* SalaryInput Section */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center justify-between w-full gap-3">
            <label>Official Working Days:</label>
            <SalaryInput
              type="number"
              value={workingDays}
              onChange={(e) => setWorkingDays(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between w-full gap-3">
            <label>Working Hours/Day:</label>
            <SalaryInput
              type="number"
              value={workingHoursPerDay}
              onChange={(e) => setWorkingHoursPerDay(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between w-full gap-3">
            <label>Basic Salary:</label>
            <SalaryInput
              type="number"
              value={basicSalaryPerMonth}
              onChange={(e) => setBasicSalaryPerMonth(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between w-full gap-3">
            <label>Total Worked Hours:</label>
            <div className="flex items-center justify-between gap-1.5">
              h
              <SalaryInput
                type="number"
                value={totalWorkingHours.hours}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0) {
                    setTotalWorkingHours({
                      ...totalWorkingHours,
                      hours: Number(e.target.value),
                    });
                  }
                }}
              />
              m
              <SalaryInput
                type="number"
                value={totalWorkingHours.minutes}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 59) {
                    setTotalWorkingHours({
                      ...totalWorkingHours,
                      minutes: value,
                    });
                  }
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3">
            <label>Purchase Fee:</label>
            <SalaryInput
              type="number"
              value={purchaseFee}
              onChange={(e) => setPurchaseFee(Number(e.target.value))}
            />
          </div>
          <button
            className="p-2 bg-gray-100 rounded-md w-full"
            onClick={() => {
              setWorkingDays(22);
              setBasicSalaryPerMonth(620);
              setWorkingHoursPerDay(7);
              setTotalWorkingHours({
                hours: Math.floor(workHours),
                minutes: (workHours - Math.floor(workHours)) * 60,
              });
              setPurchaseFee(0);
            }}
          >
            Reset
          </button>
        </div>

        {/* Result Section */}
        <div className="flex flex-col gap-3 pl-6 border-l">
          <h1 className="text-xl font-semibold">
            Monthly Working Hours:{" "}
            {formatHoursMinutesToHoursMinutes(monthlyWorkingHours)}
          </h1>
          <h1 className="text-xl font-semibold">
            Total Working Hours:{" "}
            {formatHoursMinutesToHoursMinutes(totalWorkingHoursInHours)}
          </h1>
          <h1 className="text-xl font-semibold">
            Extra Working Hours: {totalWorkingHoursInMinutes}
          </h1>
          <h1 className="text-xl font-semibold">
            Salary Per Hour: ${salaryPerHour.toFixed(2)}
          </h1>
          <h1 className="text-xl font-semibold">
            Salary Per Day: ${salaryPerDay}
          </h1>

          <h1 className="text-xl font-semibold">
            Extra Working Days: {extraDays.extraDays}
          </h1>
          <h1 className="text-xl font-semibold">
            Total Salary: ${totalSalary.totalSalaryWithBasic.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SalaryCount;
