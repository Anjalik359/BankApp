import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

export const Deposit = () => {
  const [accno, setAccno] = useState(0);
  const [amnt, setAmnt] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [msg, setMsg] = useState("");

  const handlesubmit = async () => {
    const url = "http://localhost:4040/api/updatebenef";
    const payload = {
      accno,
      amnt,
    };
    const result = await axios.post(url, payload);
    setMsg = result.data;
    handlecancel();
  };
  const handlecancel = () => {
    setAccno(0);
    setAmnt(0);
  };
  useEffect(() => {
    setIsValid(accno.length === 10 && amnt > 99);
  }, [accno, amnt]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              label="Account Number"
              variant="outlined"
              value={accno}
              onChange={(e) => setAccno(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Amount"
              variant="outlined"
              value={amnt}
              onChange={(e) => setAmnt(e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              onClick={handlesubmit}
              disabled={!isValid}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" onClick={handlecancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12}>
            {msg !== "" && <Alert severity="success">{msg}</Alert>}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
