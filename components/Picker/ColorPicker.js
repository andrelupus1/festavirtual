import { useState } from "react";
import { SketchPicker } from "react-color";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/components/colorpicker.js";

const useStyles = makeStyles(styles);

export default function ColorPicker() {
  const classes = useStyles();
  
  const [state, setState] = useState({
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  });
  
  // Abrir e fechar Display
  const handleClick = () => {
    setState({ ...state, displayColorPicker: !state.displayColorPicker });
  };
  //Se fechar resetar
  const handleClose = () => {
    setState({ ...state, displayColorPicker: false });
  };
  
  //Receber valor
  const handleChange = (color) => {
    setState({ ...state, color: color.rgb, background: color.hex });
    console.log(color); //Valor
  };
  
  return (
    <div>
      <div className={classes.info} onClick={handleClick}>
        CORES
        <div
          style={{
            background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
          }}
        >
          Resultado 1
        </div>
        <div style={{background: `${state.background}` }}>
          Resultado 2
        </div>
        
      </div>
      {state.displayColorPicker ? (
        <div>
          <div onClick={handleClose} />
          <SketchPicker 
          color={state.color}
          onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
}
