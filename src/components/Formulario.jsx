import React from "react";
import { useState, useEffect } from "react";

export default function Formulairo() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10 ">
        Añade pacientes y{" "}
        <span className="text-indigo-600" font-bold>
          {" "}
          administralos{" "}
        </span>
      </p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            className="block text-green-700 uppeRcase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-green-700 uppeRcase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-green-700 uppeRcase font-bold"
            htmlFor="email"
          >
            Email
          </label>

          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="example@email.com"
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-green-700 uppeRcase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>

          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-green-700 uppeRcase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los sintomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
}
