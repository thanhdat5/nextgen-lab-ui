import { Product } from "@/types/product";

type Props = {
    data: Product;
}
const ProductContent = ({ data }: Props) => {
    return <div className='ngl-product-content'>
        <div className='container'>
            {data.content}
        </div>
    </div>
}
export default ProductContent