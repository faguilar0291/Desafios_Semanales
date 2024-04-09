import "../layout/product-form.scss"
import PropTypes from "prop-types";

const ProductForm = (props) => {

    const {children} = props;


  return (
    <>
        {children}
    </>
  );
};

export default ProductForm;

ProductForm.propTypes = {
    children: PropTypes.node,
}
