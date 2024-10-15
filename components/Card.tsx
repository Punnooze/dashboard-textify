import fallback from '../public/fallback.png';
import Image from 'next/image';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
interface ProductType {
  product: {
    productName: string;
    category: string;
    drop: string;
    price: number;
    unitsSold: number;
    performance: number;
  };
}

export default function Card({ product }: ProductType) {
  let colour = 'green';
  if (product.performance < 0) {
    colour = 'red';
    product.performance = product.performance * -1;
  }
  return (
    <div className="bg-bgLightBlue dark:bg-bgLightGrey p-[15px] rounded-lg ">
      <div>
        <p className="text-[14px] mb-[5px]">{product.productName}</p>
        <Image src={fallback} alt="product" className="rounded-lg mb-[10px] " />
      </div>
      <div className="text-textGrey dark:text-textDarkGrey text-[14px]">
        <p className="text-[13px]">{product.category}</p>
        <p className="text-[12px] mb-[10px]">{product.drop}</p>
        <div className="flex justify-between items-center">
          <p>₹{product.price}</p>
          <p>
            sold : <span className="font-bold">{product.unitsSold}</span>
          </p>

          <div className="flex items-center">
            <div
              className={`flex p-[3px] rounded-md items-center bg-${colour}/20 border-[1px] border-${colour} `}
            >
              {colour === 'red' ? (
                <FaCaretDown className="text-red" />
              ) : (
                <FaCaretUp className="text-green" />
              )}
              <p className={`text-${colour}`}>{product.performance}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
