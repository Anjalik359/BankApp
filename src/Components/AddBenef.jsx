import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Alert,
} from "@mui/material";

export const AddBenef = () => {
  const [isValid, setIsValid] = useState(false);
  const [accno, setAccno] = useState(0);
  const [bankname, setBankname] = useState("");
  const [branchname, setBranchname] = useState("");
  const [amnt, setAmnt] = useState(0);
  const [bname, setBname] = useState("");
  const [isActive] = useState(1);
  const [isSuffAmnt, setIsSuffAmnt] = useState(false);
  const [isValidAcc, setIsValidAcc] = useState(false);
  const [txtSucess, setTxtSucess] = useState("");

  const handleCancel = () => {
    setAccno(0);
    setAmnt(0);
    setBankname("");
    setBranchname("");
    setBname("");
  };
  const handleSubmit = async () => {
    const url = "http://localhost:4040/api/addBenef";
    const payload = {
      accno,
      bankname,
      bname,
      branchname,
      isActive,
    };
    const result = await axios.post(url, payload);
    setTxtSucess(result.data);
    console.log(result);
  };
  useEffect(() => {
    setIsValidAcc(accno.length === 10 || accno === 0);
  }, [accno]);
  useEffect(() => {
    setIsSuffAmnt(amnt >= 500 || amnt === 0);
  }, [amnt]);
  useEffect(() => {
    setIsValid(
      accno.length === 10 &&
        bankname.length >= 3 &&
        branchname.length >= 4 &&
        amnt > 500 &&
        bname.length > 5
    );
  }, [accno, bankname, branchname, amnt, bname]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              label="Account Number"
              value={accno}
              variant="outlined"
              required
              type="number"
              onChange={(e) => setAccno(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Bank Name"
              value={bankname}
              variant="outlined"
              required
              onChange={(e) => setBankname(e.target.value.toUpperCase())}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Branch Name"
              variant="outlined"
              value={branchname}
              required
              onChange={(e) => setBranchname(e.target.value.toUpperCase())}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              value={amnt}
              variant="outlined"
              required
              type="number"
              onChange={(e) => setAmnt(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Beneficiary Name"
              variant="outlined"
              value={bname}
              required
              onChange={(e) => setBname(e.target.value.toUpperCase())}
            />
          </Grid>
          <Grid item xs={6}>
            {txtSucess !== "" && <Alert severity="success">{txtSucess}</Alert>}
            {!isSuffAmnt && (
              <Alert severity="error">
                Amount should not be lesser than 500.
              </Alert>
            )}
            {isValidAcc ? (
              <Alert severity="success">Valid Account Number!</Alert>
            ) : (
              <Alert severity="warning">Please enter the valid Account</Alert>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
