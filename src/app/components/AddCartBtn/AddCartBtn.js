const AddCartBtn = ({ addToCart }) => {
  //   const [cartItem, setCartItems] = useState([]);
  //   const [count, setCount] = useState(0);

  const handleClick = () => {
    addToCart();
  };
  return (
    <>
      <button onClick={() => handleClick()}>Add To Cart</button>
    </>
  );
};

export default AddCartBtn;
