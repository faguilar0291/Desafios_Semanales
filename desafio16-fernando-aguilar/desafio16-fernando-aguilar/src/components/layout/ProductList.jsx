import "../layout/product-list.scss"
import PropTypes from "prop-types";

const ProductList = (props) => {

    const {children} = props;


  return (
    <>
        {children}
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
    children: PropTypes.node,
}
