import React from "react";

const Simplelista = () => {
  const numbers = [1, 2, 3, 4, 5, 1, 2];

  return (
    <div>
      <ul>
        {numbers.map((broj) => (
          <li key={crypto.randomUUID()}>{broj}</li>
        ))}
      </ul>
    </div>
  );
};

export default Simplelista;