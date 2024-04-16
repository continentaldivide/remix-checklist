"use client";
import bronze from "./_data/bronze";
import Vendor from "./_components/Vendor";
import { useState, useEffect } from "react";
import useCalculateBronze from "./_hooks/useCalculateBronze";

const defaultMap: Record<string, boolean> = {};

export default function Home() {
  let bronzeTotal: number = 0;
  const [checkedMap, setCheckedMap] =
    useState<Record<string, boolean>>(defaultMap);

  useEffect(() => {
    const localMap = localStorage.getItem("checkedMap");
    if (!localMap) {
      localStorage.setItem("checkedMap", JSON.stringify(defaultMap));
    } else {
      const parsedLocalMap = JSON.parse(localMap);
      setCheckedMap(parsedLocalMap);
    }
  }, []);

  bronzeTotal = useCalculateBronze(bronze, checkedMap);

  const vendors = bronze.vendors.map((vendor, i) => {
    return (
      <Vendor
        vendor={vendor}
        checkedMap={checkedMap}
        setCheckedMap={setCheckedMap}
        key={`vendor ${i}`}
      />
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="">total bronze required: {bronzeTotal}</p>
      {vendors}
    </main>
  );
}
