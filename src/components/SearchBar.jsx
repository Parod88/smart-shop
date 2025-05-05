const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Buscar por marca o modelo..."
        value={value}
        onInput={(e) => onChange(removeAccents(e.target.value.toLowerCase()))}
      />
    </div>
  );
};

export default SearchBar;
