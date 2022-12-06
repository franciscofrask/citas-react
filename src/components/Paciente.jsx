import React from "react";

export default function Paciente() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold text-gray-700 uppercase mb-3">
        Nombre: <span className="font-normal normal-case">hook</span>
      </p>

      <p className=" font-bold text-gray-700 uppercase mb-3">
        Propietario: <span className="font-normal normal-case">Fran</span>
      </p>

      <p className=" font-bold text-gray-700 uppercase mb-3">
        eMail:{" "}
        <span className="font-normal normal-case">correo@ejemplo.com</span>
      </p>

      <p className=" font-bold text-gray-700 uppercase mb-3">
        Fecha Alta: <span className="font-normal normal-case">10/10/2022</span>
      </p>

      <p className=" font-bold text-gray-700 uppercase mb-3">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos
          molestias deserunt, neque veniam cumque, accusamus rem repellat
          impedit ab ipsam totam explicabo exercitationem itaque consequatur
          minima iste! Laudantium, molestiae.
        </span>
      </p>
    </div>
  );
}
