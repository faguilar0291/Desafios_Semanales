import "../layout/taskform.scss";
import PropTypes from "prop-types";

export default function TaskForm( props) {
    const {children} = props;


  return (
    <>
        {children}
    </>
  )
}

TaskForm.propTypes = {
    children: PropTypes.node,
}