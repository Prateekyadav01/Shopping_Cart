const Cart = ({post}) => {
  return <div>
    <h1>{post.id}</h1>
    <h1>{post.title}</h1>
    <h1>{post.price}</h1>
    <p>{post.description}</p>
    <p>{post.category}</p>
    <img src={post.image} alt="" />
    <p>{post.rating}</p>
  </div>;
};

export default Cart;
