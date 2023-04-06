import React from "react";
import FirstPageIcon from '@mui/icons-material/FirstPage';

const backButton = ({url}) => {
  return (
    <a href={url}>
      <FirstPageIcon sx={{ color: "red", fontSize: 40 }} />
    </a>
  );
};

export default backButton;