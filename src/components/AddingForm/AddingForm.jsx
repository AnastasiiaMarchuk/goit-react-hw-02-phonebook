import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),
    number: yup
      .string()
      .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
      .required(),
  })
  .required();

export default function AddingForm({ addContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => addContact(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input {...register('name')} />
        {errors.name && <span>Name is required</span>}
      </label>
      <label>
        Number
        <input {...register('number', { required: true })} />
        {errors.number && <span>Number is required</span>}
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
