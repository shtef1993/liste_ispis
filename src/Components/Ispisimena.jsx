import React from "react";

const Ispisimena = ({ imena }) => {
  return (
    <div>
      <ul>
        {imena.map((ime) => (
          <li key={crypto.randomUUID()}>{ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ispisimena;