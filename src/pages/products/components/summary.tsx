import { Product } from "@/types/product"
import Image from "next/image"

type Props = {
    data: Product;
}
const ProductSummary = ({ data }: Props) => {
    return <div className='ngl-product-summary'>
        <div className='container'>
            <div className='row align-items-center '>
                <div className='col-lg-5 col-md-4 text-md-start text-center'>
                    <Image width={337} height={388} src={data?.logo || ''} alt='' />
                </div>
                <div className='col-lg-7 col-md-8'>
                    <h1>{data?.name}</h1>
                    {data?.description}
                </div>
            </div>
        </div>
    </div>
}
export default ProductSummary