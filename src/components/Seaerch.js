const Seaerch = ({ onChange, placeholder }) => {
  return (
    <input
      className="text_input search"
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Seaerch;
