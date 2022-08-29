import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, TextField } from "@mui/material";
import { ShowBankItem } from "./ShowBankItem";

export const Showbankbycity = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [txt, setTxt] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:4040/banks");
    setData(result.data);
    setFiltData(result.data);
  };
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.city.toUpperCase().includes(txt.toUpperCase())
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
            label="Search By City..."
            variant="outlined"
            onChange={(e) => setTxt(e.target.value)}
          />
        </CardContent>
      </Card>
      {filtData.map((item, index) => (
        <ShowBankItem key={index} item={item} />
      ))}
    </div>
  );
};
