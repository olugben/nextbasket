import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { RatingCartIcon } from "../icons";
import { Rating } from "@mui/material";
interface State extends SnackbarOrigin {
  open: boolean;
}

interface ISnackBtn {
  children: React.ReactNode;
  title: string;
  disabled: boolean;
  handleBtnClick: () => void;
  msg: string;
}

export default function CartBtnSnackbar({
  children,
  title,
  disabled,
  handleBtnClick,
  msg,
}: ISnackBtn) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        onClick={() => {
          handleBtnClick();
          handleClick({ vertical: "bottom", horizontal: "right" })();
        }}
        title={title}
        disabled={disabled}
      >
        {children}
      </Button>
    </Box>
  );

  return (
    <Box>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
        key={vertical + horizontal}
      />
    </Box>
  );
}
