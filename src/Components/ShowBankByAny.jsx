import React, { useState, useEffect } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import axios from "axios";
import { ShowBankItem } from "./ShowBankItem";

export const ShowBankByAny = () => {
  const [txt, setTxt] = useState("");
  const [data, setData] = useState([]);
  const [filtdata, setFiltData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:4040/banks");
    setData(result.data);
    setFiltData(result.data);
  };
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.name.toUpperCase().includes(txt.toUpperCase()) ||
        item.city.toUpperCase().includes(txt.toUpperCase()) ||
        item.branch.toUpperCase().includes(txt.toUpperCase())
    );
    setFiltData(filtered);
  }, [txt]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
          <TextField
            label="Search by Any..."
            variant="outlined"
            onChange={(e) => setTxt(e.target.value)}
          />
        </CardContent>
      </Card>
      {filtdata.map((item) => (
        <ShowBankItem item={item} />
      ))}
    </div>
  );
};
