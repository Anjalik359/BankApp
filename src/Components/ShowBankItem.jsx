import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const ShowBankItem = ({ item }) => {
  return (
    <Card className="rowdata">
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <h2>{item.name}</h2>
          </Grid>
          <Grid item xs={4}>
            <h5> {item.branch}</h5>
          </Grid>
          <Grid item xs={4}>
            <h3> {item.city}</h3>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
