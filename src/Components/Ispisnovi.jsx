import React, { useState } from "react";
import IspisUnosa from "./IspisUnosa";

const Ispisnovi = ({ imena }) => {
  const [names, setNames] = useState(imena);
  const [firstName, setFirstName] = useState("");
  const [year, setYear] = useState(0);
  const [gender, setGender] = useState(""); 
  const [hasCar, setHasCar] = useState(false); 
  const [hasPet, setHasPet] = useState(false); 

  return (
    <div>
      <input
        type="text"
        placeholder="Ime"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Godina rođenja"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Spol"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <label>
        Posjeduje osobni automobil:
        <input
          type="checkbox"
          checked={hasCar}
          onChange={() => setHasCar(!hasCar)}
        />
      </label>
      <label>
        Ima kućnog ljubimca:
        <input
          type="checkbox"
          checked={hasPet}
          onChange={() => setHasPet(!hasPet)}
        />
      </label>
      <button
        onClick={() => {
          setNames([
            ...names,
            {
              id: crypto.randomUUID(),
              name: firstName,
              years: year,
              gender: gender,
              hasCar: hasCar,
              hasPet: hasPet,
            },
          ]);
        }}
      >
        Dodaj
      </button>
      <IspisUnosa names={names} />
    </div>
  );
};

export default Ispisnovi;
