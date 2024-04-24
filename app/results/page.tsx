"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Report = () => {
    const searchParams = useSearchParams()

    useEffect(() => {
      console.log("searchParams", searchParams.get('date'))
      console.log("searchParams", searchParams.get('exchange'))
      });

  return (
    <></>

  );
};

export default Report