import React from "react";
import {
  getProductComposedDetailAsync,
  RelatedDataDetail,
} from "../../Data/ProductData";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

interface Props {
  ar_codart: string;
}

export const ComposedProducts = (props: Props) => {
  const [relateds, setRelated] = useState<RelatedDataDetail[]>([]);
  const [showLoader, setLoader] = useState(false);

  React.useEffect(() => {
    const getProds = async () => {
      const prods = await getProductComposedDetailAsync(props.ar_codart);
      setRelated(prods);
    };
    setLoader(true);
    getProds();
    setLoader(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {showLoader ? (
        <Spinner animation="border" size="sm" />
      ) : (
        <ul>
          {relateds.map((item) => (
            <li>
              {item.ar_codart} - {item.ar_descr} - {item.ar_price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
