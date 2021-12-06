function FormInput({ setBuyer, buyer, name, length }) {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input
        type="text"
        name={name}
        onChange={handleBuyerChange}
        maxLength={length}
      ></input>
    </div>
  );
}

export default FormInput;
