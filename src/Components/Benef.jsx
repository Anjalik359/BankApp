import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { AddBenef } from "./AddBenef";
import { ShowBenef } from "./ShowBenef";
export const Benef = () => {
  const [val, setVal] = useState("addbenef");
  return (
    <div>
      <h3>Manage Beneficiary</h3>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="addbenef" label="Add Beneficiary" />
        <Tab value="showbenef" label="Show Beneficiary" />
      </Tabs>
      {val === "addbenef" && <AddBenef />}
      {val === "showbenef" && <ShowBenef />}
    </div>
  );
};
