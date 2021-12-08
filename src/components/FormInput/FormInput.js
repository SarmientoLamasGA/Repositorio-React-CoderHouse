function FormInput({ name, length }) {
  return (
    <div>
      <input type="text" name={name} maxLength={length}></input>
    </div>
  );
}

export default FormInput;
