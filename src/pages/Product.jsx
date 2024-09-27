import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../components/Descriptionbox/Descriptionbox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";


const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrums product = {product} />
      <ProductDisplay product= {product}/>
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product