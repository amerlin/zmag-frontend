import React from "react";
import {
  getProductComposedDetailAsync,
  RelatedDataDetail,
} from "../../Data/ProductData";
import { useState } from "react";

interface Props {
  ar_codart: string;
}

export const ComposedProducts = (props: Props) => {
  const [relateds, setRelateds] = useState<RelatedDataDetail[]>([]);

  React.useEffect(() => {
    const getProds = async () => {
      const prods = await getProductComposedDetailAsync(props.ar_codart);
      console.log("inizio: " + prods.length);
      setRelateds(prods);
    };
    getProds();
    console.log("fine: " + relateds.length);
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {relateds.map((item) => (
        <li>
          {item.ar_codart} - {item.ar_descr} - {item.ar_price} €
        </li>
      ))}
    </ul>
  );
};
