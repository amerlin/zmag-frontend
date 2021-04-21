import React from "react";

interface Props {
  ar_codart: string;
}

export const ComposedProducts = (props: Props) => {
  React.useEffect(() => {
    console.log(props.ar_codart);
  });

  return (
    <div>
      <h4>Dettaglio prodotto in distinta base {props.ar_codart}</h4>
    </div>
  );
};
