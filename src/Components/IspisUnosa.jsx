import React from "react";

const IspisUnosa = ({ names }) => {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            Ime: {name.name}, Godine: {name.years}, 
            Spol: {name.gender || "N/A"}, 
            Automobil: {name.hasCar ? "Da" : "Ne"}, 
            Kućni ljubimac: {name.hasPet ? "Da" : "Ne"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IspisUnosa;
