import "../layout/climaciudad.scss"
import PropTypes from "prop-types";

const ClimaCiudad = (props) => {

    const {children} = props;


  return (
    <>
        {children}
    </>
  );
};

export default ClimaCiudad;

ClimaCiudad.propTypes = {
    children: PropTypes.node,
}
