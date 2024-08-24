import React, { useEffect, useState } from "react";

export default function Crud() {
  const [data, setData] = useState({
    name: "",
    last_name: "",
    age: "",
  });

  const onChangeSetName = (e) => {
    setData((dt) => {
      return {
        ...dt,
        name: e.target.value,
      };
    });
  };

  const onChangeSetLast_Name = (e) => {
    setData((dt) => {
      return {
        ...dt,
        last_name: e.target.value,
      };
    });
  };

  const onChangeSetAge = (e) => {
    setData((dt) => {
      return {
        ...dt,
        age: e.target.value,
      };
    });
  };

  return (
    <form
      action=""
      className="rounded-md flex flex-col items-center h-[90.5vh] p-20 bg-gray-900"
    >
      <section className="grid w-[60%] columns-1 gap-y-4">
        <input
          className="px-2 rounded-sm w-full py-2"
          type="text"
          placeholder="Nombre"
          value={data["name"]}
          onChange={onChangeSetName}
        />
        <input
          className="px-2 rounded-sm w-full py-2"
          type="text"
          placeholder="Apellido"
          value={data["last_name"]}
          onChange={onChangeSetLast_Name}
        />
        <input
          className="px-2 rounded-sm w-full py-2"
          type="text"
          placeholder="Edad"
          value={data["age"]}
          onChange={onChangeSetAge}
        />
      </section>
      <section className="flex justify-center py-6">
        <button className="bg-blue-600 text-white px-10 py-2 rounded-lg text-[15px] shadow-md shadow-gray-400">
          Enviar
        </button>
      </section>
    </form>
  );
}
