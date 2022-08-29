import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { AddBank } from "./AddBank";
import { ShowBanks } from "./ShowBanks";
import { Showbankbycity } from "./Showbankbycity";
import { ShowBankByAny } from "./ShowBankByAny";
import { ShowAdvanceBank } from "./ShowAdvanceBank";
import { ShowBenef } from "./ShowBenef";
import { Deposit } from "./Deposit";
import { Debit } from "./Debit ";
export const Banks = () => {
  const [val, setVal] = useState("addbank");
  return (
    <div>
      <h3>Bank Home</h3>
      <Tabs value={val} onChange={(e, val) => setVal(val)}>
        <Tab value="accholder" label="Account Holders" />
        <Tab value="deposit" label="Deposit" />
        <Tab value="debit" label="Debit" />
        <Tab value="addbank" label="Add Bank" />
        <Tab value="showbanks" label="Show Banks" />
        <Tab value="showbankbycity" label="Show bank by city" />
        <Tab value="showbankbyany" label="Show Bank By Any" />
        <Tab value="showadvance" label=" Advance Search" />
      </Tabs>
      {val == "accholder" && <ShowBenef />}
      {val === "addbank" && <AddBank />}
      {val === "showbanks" && <ShowBanks />}
      {val === "showbankbycity" && <Showbankbycity />}
      {val === "showbankbyany" && <ShowBankByAny />}
      {val === "showadvance" && <ShowAdvanceBank />}
      {val === "deposit" && <Deposit />}
      {val === "debit" && <Debit />}
    </div>
  );
};
