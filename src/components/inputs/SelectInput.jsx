function SelectInput({ label, name, value, onChange, options, required }) {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className='w-full p-2 border rounded-lg'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
