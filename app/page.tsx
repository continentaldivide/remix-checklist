"use client";
import bronze from "./_data/bronze";
import Vendor from "./_components/Vendor";
import { useState, useEffect } from "react";

export default function Home() {
  const bronzeTotal: number = 0;
  const defaultArray = [false, false, false];
  const [checkedArray, setCheckedArray] = useState(defaultArray);

  useEffect(() => {
    const localData = localStorage.getItem("checkedArray");
    if (!localData) {
      localStorage.setItem(
        "checkedArray",
        JSON.stringify({
          checked: defaultArray,
        })
      );
      setCheckedArray(defaultArray);
    } else {
      const parsedLocalData = JSON.parse(localData);
      setCheckedArray(parsedLocalData.checked);
    }
  }, []);

  const vendors = bronze.vendors.map((vendor, i) => {
    return (
      <Vendor
        vendor={vendor}
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
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
