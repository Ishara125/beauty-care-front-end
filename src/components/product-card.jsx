export default function ProductCard(props) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
      <h1>product</h1>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>add to cart</button>
    </div>
  )
}