function FormInput({ setBuyer, buyer, name }) {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input type="text" name={name} onChange={handleBuyerChange}></input>
    </div>
  );
}

export default FormInput;
