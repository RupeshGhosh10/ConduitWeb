const TextArea = ({ type, name, placeholder, register, error, defaultValue = null, height = '7.5rem' }) => {
  return (
    <div className='form-floating has-validation mb-2'>
      <textarea
        type={type}
        className='form-control form-control-lg'
        style={{ height: height }}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}>
      </textarea>
      <label htmlFor='bio'>{placeholder}</label>
      <p className='invalid-feedback m-0 ps-1'>{error}</p>
    </div>
  );
}

export default TextArea;
