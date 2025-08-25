function TextInput({ label, name, value, onChange, required = false }) {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <input
        name={name}
        type='text'
        className='w-full p-2 border rounded-lg'
        onChange={onChange}
        required={required}
        value={value}
      />
    </div>
  );
}

export default TextInput;
