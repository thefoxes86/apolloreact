import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { ThemeContext, themes } from "../containers/ThemeContext";
import { useContext } from "react";

export default function SwitchLabel() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (bgColor.background === "#222") {
      setBgColor(themes.light);
    } else {
      setBgColor(themes.dark);
    }
  };

  const [bgColor, setBgColor] = useContext(ThemeContext);
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Dark Theme"
      />
    </FormGroup>
  );
}
