function FormInput({ setBuyer, buyer, name }) {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.value]: e.target.name });
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleBuyerChange}></input>
    </div>
  );
}

export default FormInput;
