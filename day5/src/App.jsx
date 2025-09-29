import React, { useState } from "react";
import FormInputs from "./Components/FormInputs";
import CardInput from "./Components/CardInput";


const App = () => {
  const [formData, setFormData] = useState([]);

  const getData = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-400 to-gray-200 flex flex-col items-center p-6">
      {/* Form */}
      <FormInputs getData={getData} />

      {/* Submitted Cards */}
      <div className="mt-8 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {formData.map((elem, index) => (
          <CardInput key={index} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
