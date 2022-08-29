import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShowBenefItem } from "./ShowBenefItem";

export const ShowBenef = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const result = await axios.post("http://localhost:4040/api/getBenef", {});
    setData(result.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <ShowBenefItem item={item} />
      ))}
    </div>
  );
};
