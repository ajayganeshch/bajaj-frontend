import React, { useState } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Axios from "axios";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleJsonSubmit = async (data) => {
    console.log(data);

    const apiEndpoint = "https://bajaj-api-2f8j.onrender.com/api/bfhl";

    Axios.post(apiEndpoint, { ...data }).then(async (data) => {
      console.log(await data.data);

      setResponseData(await data.data);
    });
  };

  const renderResponse = () => {
    if (!responseData) return null;

    return (
      <div>
        {selectedOptions.includes("Alphabets") && (
          <div>
            <h3>Alphabets:</h3>
            <p>{responseData.alphabets.join(", ")}</p>
          </div>
        )}
        {selectedOptions.includes("Numbers") && (
          <div>
            <h3>Numbers:</h3>
            <p>{responseData.numbers.join(", ")}</p>
          </div>
        )}
        {selectedOptions.includes("Highest lowercase alphabet") && (
          <div>
            <h3>Highest lowercase alphabet:</h3>
            <p>{responseData.highest_lowercase_alphabet}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Input onSubmit={handleJsonSubmit} />
      {responseData && (
        <Dropdown
          options={["Alphabets", "Numbers", "Highest lowercase alphabet"]}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />
      )}
      {renderResponse()}
    </div>
  );
};

export default App;
