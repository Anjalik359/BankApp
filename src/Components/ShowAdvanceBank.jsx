import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Button } from "@mui/material";
import Select from "react-select";
import { ShowBankItem } from "./ShowBankItem";

export const ShowAdvanceBank = () => {
  const [name, setName] = useState("All");
  const [branch, setBranch] = useState("All");
  const [city, setCity] = useState("All");
  const [data, setData] = useState([]);

  const optionsNames = [
    { value: "All", label: "All" },
    { value: "HDFC", label: "HDFC" },
    { value: "Axis", label: "Axis" },
    { value: "ICICI", label: "ICICI" },
  ];
  const optionsBranch = [
    { value: "All", label: "All" },
    { value: "Shivaji Nagar", label: "Shivaji Nagar" },
    { value: "Taroda Naka", label: "Taroda Naka" },
    { value: "Degloor Naka", label: "Degloor Naka" },
  ];
  const optionsCity = [
    { value: "All", label: "All" },
    { value: "Nanded", label: "Nanded" },
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bidar", label: "Bidar" },
  ];
  const handleChangeName = (selectedVal) => {
    setName(selectedVal.value);
  };
  const handleChangeBranch = (selectedVal) => {
    setBranch(selectedVal.value);
  };
  const handleChangeCity = (selectedVal) => {
    setCity(selectedVal.value);
  };
  const handleSearch = async () => {
    const payload = {};
    if (name !== "All") payload["name"] = name;
    if (branch !== "All") payload["branch"] = branch;
    if (city !== "All") payload["city"] = city;
    const result = await axios.post(
      "http://localhost:4040/api/getbank",
      payload
    );
    setData(result.data);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Select options={optionsNames} onChange={handleChangeName} />
        </Grid>
        <Grid item xs={3}>
          <Select options={optionsBranch} onChange={handleChangeBranch} />
        </Grid>
        <Grid item xs={3}>
          <Select options={optionsCity} onChange={handleChangeCity} />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          {data.map((item) => (
            <ShowBankItem item={item} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
