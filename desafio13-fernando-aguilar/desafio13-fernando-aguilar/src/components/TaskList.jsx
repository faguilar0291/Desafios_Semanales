import PropTypes from "prop-types";

export default function TaskList(props) {
    const {children} = props;

  return (
    <>
        {children}
    </>
  )
}

TaskList.propTypes = {
    children: PropTypes.node,
}

//2:07 clase 44