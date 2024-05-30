"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "@/components/ui/button";

const HomeFilters = () => {
  // TODO: Get value from button
  const active = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500"
          } `}
          onClick={() => console.log(item.value)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
