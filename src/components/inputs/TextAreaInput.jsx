function TextAreaInput({ label, name, value, onChange, required = false }) {
  return (
    <div className='mb-4'>
      <label htmlFor='name' className='block font-semibold'>
        {label}
      </label>
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        className='w-full p-2 border rounded-lg'
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
