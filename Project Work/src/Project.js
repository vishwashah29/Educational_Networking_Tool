import React from "react";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import background1 from "./Images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },

  button: {
    margin: theme.spacing(2),
  },
}));

const Project = ({ Project }) => {
  const classes = useStyles();
  return (
    <div className="ProjectBox ForShadow">
      <div style={{ display: "inline-flex" }}>
        <div>
          <img className="ImgProj" src={background1} alt="Logo of website" />
        </div>
        <div>
          <div style={{ display: "inline-flex" }}>
            <h2 className="projhd">{Project.Title}</h2>

            <Button className="ApplyBtn">
              Apply
              <PersonAddIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <p className="ProjectDiscrp" style={{ display: "inline-block" }}>
          {Project.Description}
        </p>
      </div>
    </div>
  );
};

export default Project;
