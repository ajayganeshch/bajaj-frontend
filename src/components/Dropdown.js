// Dropdown.jsx
import React from "react";
import Multiselect from "multiselect-react-dropdown";

const Dropdown = ({ options, selectedOptions, onChange }) => {
  const handleSelect = (selectedList, selectedItem) => {
    onChange(selectedList.map((item) => item.name));
  };

  const handleRemove = (selectedList, removedItem) => {
    onChange(selectedList.map((item) => item.name));
  };

  const formattedOptions = options.map((option) => ({
    name: option,
    id: option,
  }));

  const hasSelectedItems = selectedOptions.length > 0;

  return (
    <div className="custom-multiselect-container">
      <Multiselect
        options={formattedOptions}
        selectedValues={formattedOptions.filter((option) =>
          selectedOptions.includes(option.name)
        )}
        onSelect={handleSelect}
        onRemove={handleRemove}
        displayValue="name"
        placeholder={hasSelectedItems ? "" : "Select options"}
        showCheckbox
        className="custom-multiselect"
      />
    </div>
  );
};

export default Dropdown;
