import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
export const NavBar = () => {
  return (
    <div>
      <BottomNavigation showLabels>
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            icon={<AccountBalanceIcon fontSize="large" />}
            showLabel
          />
        </Link>
        <Link to="/banks">
          <BottomNavigationAction
            label="Banks"
            icon={<AccountBalanceWalletIcon fontSize="large" />}
            showLabel
          />
        </Link>
        <Link to="/benef">
          <BottomNavigationAction
            label="Manage Beneficiary"
            icon={<ManageAccountsIcon fontSize="large" />}
            showLabel
          />
        </Link>
      </BottomNavigation>
    </div>
  );
};
