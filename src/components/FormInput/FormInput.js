function FormInput({ buyer, name, setBuyer, length }) {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
    console.log(buyer);
  };
  return (
    <div>
      <input
        type="text"
        name={name}
        maxLength={length}
        onChange={handleBuyerChange}
      ></input>
    </div>
  );
}

export default FormInput;
