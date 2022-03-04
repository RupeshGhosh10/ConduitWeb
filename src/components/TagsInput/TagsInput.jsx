import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import styles from './TagsInput.module.css';

const TagsInput = ({ control, register }) => {

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags'
  });
  const [currentTag, setCurrentTag] = useState('');

  const handleCurrentTagChange = event => {
    setCurrentTag(event.target.value);
  }

  return (
    <>
      <ul className='d-flex align-items-center justify-content-start flex-wrap ps-1 mb-1'>
        {fields.map((field, index) => (
          <li key={field.id} className='list-unstyled me-1 mb-1'>
            <div className='input-group'>
              <input
                className={`btn btn-sm btn-outline-primary ${styles.tagButton}`}
                {...register(`tags.${index}`)}
                disabled
              />
              <button
                className={`btn btn-sm btn-primary ${styles.deleteButton}`}
                onClick={() => remove(index)}
                defaultValue='&#x2715;'
              >
                &#x2715;
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='input-group'>
        <input className='form-control' value={currentTag} onChange={handleCurrentTagChange} placeholder='Tag' />
        <button className='btn btn-success' type="button" onClick={() => append(currentTag)}>Add Tag</button>
      </div>
    </>
  );
}

export default TagsInput;