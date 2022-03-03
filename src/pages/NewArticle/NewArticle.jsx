import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';

const NewArticle = () => {

  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  return (
    <div className='w-100 full-height container'>
      <div className='row'>
        <form className='mt-2 offset-sm-2 col-sm-8 col-12'>
          <h2 className='text-center mb-3'>New Article</h2>
          <Input
            type='text'
            name='title'
            placeholder='Article Title'
            register={register}
            error={errors.title}
          />
          <Input
            type='text'
            name='description'
            placeholder={'What\'s this article about?'}
            register={register}
            error={errors.description}
          />
          <TextArea
            type='text'
            name='body'
            placeholder='Write your aritcle'
            register={register}
            error={errors.body}
            height='20rem'
          />
          <div className='mt-3 text-center'>
            <input type='submit' className='btn btn-lg btn-success float-end' value='Publish Article' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewArticle;