"use client";
import bronze from "./_data/bronze";
import Vendor from "./_components/Vendor";
import { useState, useEffect } from "react";

const defaultMap: Record<string, boolean> = {};

for (let i = 0; i < 3; i++) {
  defaultMap[i] = false;
}

export default function Home() {
  const bronzeTotal: number = 0;
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
