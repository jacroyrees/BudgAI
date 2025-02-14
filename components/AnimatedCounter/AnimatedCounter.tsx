"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className={"w-full"}>
      <CountUp duration={2.75} end={amount} prefix="£" decimal="." decimalPlaces={2}/>
    </div>
  );
};

export default AnimatedCounter;
