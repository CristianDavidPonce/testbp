import React, { useState } from 'react'
import moment from 'moment'
import { Errors, IProduct } from '../types'

const initialForm: IProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
}
interface IProps {
  defaultValues?: IProduct
  title: string
  idIsDisabled?: boolean
  onSubmit: (x: IProduct) => void
}

const Form = ({
  title,
  idIsDisabled,
  defaultValues = initialForm,
  onSubmit,
}: IProps) => {
  const [form, setForm] = useState<IProduct>(defaultValues)
  const handleChange = (value: string, name: keyof IProduct) => {
    setForm((x) => ({ ...x, [name]: value }))
    if (name === 'date_release') {
      setForm((x) => ({
        ...x,
        date_revision: moment(value).add(1, 'year').format('YYYY-MM-DD'),
      }))
    }
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(form)
  }
  const handleReset: React.FormEventHandler<HTMLFormElement> = () => {
    setForm(defaultValues)
  }
  const errors: Errors = {
    id: [
      {
        value: !form?.id,
        message: 'Id es requerido',
      },
      {
        value: form?.id !== undefined && form.id?.length < 3,
        message: 'Mínimo 3 caracteres',
      },
      {
        value: form?.id !== undefined && form.id?.length > 10,
        message: 'Máximo 10 caracteres',
      },
    ],
    name: [
      {
        value: !form?.name,
        message: 'Nombre es requerido',
      },
      {
        value: form?.name !== undefined && form.name?.length < 5,
        message: 'Mínimo 5 caracteres',
      },
      {
        value: form?.name !== undefined && form.name?.length > 100,
        message: 'Máximo 100 caracteres',
      },
    ],
    description: [
      {
        value: !form?.description,
        message: 'Descripcion es requerido',
      },
      {
        value: form?.description !== undefined && form.description?.length < 10,
        message: 'Mínimo 10 caracteres',
      },
      {
        value:
          form?.description !== undefined && form.description?.length > 200,
        message: 'Máximo 200 caracteres',
      },
    ],
    logo: [
      {
        value: !form?.logo,
        message: 'Logo es requerido',
      },
    ],
    date_release: [
      {
        value: !form?.date_release,
        message: 'Fecha de liberación es requerido',
      },
      {
        value: moment(form.date_release).isSameOrBefore(moment()),
        message: 'Fecha de liberación debe ser igual o mayor a la fecha actual',
      },
    ],
    date_revision: [
      {
        value: !form?.date_revision,
        message: 'Fecha de revisión es requerido',
      },
      {
        value:
          moment(form.date_release).format('YYYY-MM-DD') ===
          moment(form.date_release).add(1, 'year').format('YYYY-MM-DD'),
        message:
          'Fecha de revisión debe ser exactamente un año posterior a la fecha de liberación',
      },
    ],
  }
  const isError = Object.values(errors)
    .flat()
    .some((x) => x.value)

  return (
    <>
      <div className='card'>
        <h2 style={{ alignSelf: 'center' }}>{title}</h2>
        <form onSubmit={handleSubmit} onReset={handleReset} aria-label='form'>
          <div className='formulario'>
            <label>
              ID
              <input
                name={'id'}
                aria-label='id'
                type='text'
                {...(errors.id.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.id}
                onChange={(e) => handleChange(e.target.value, 'id')}
                disabled={idIsDisabled}
              />
              {errors.id
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
            <label>
              Nombre
              <input
                type='text'
                name='name'
                aria-label='name'
                {...(errors.name.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.name}
                onChange={(e) => handleChange(e.target.value, 'name')}
              />
              {errors.name
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
            <label>
              Descripción
              <input
                type='text'
                name='description'
                aria-label='description'
                {...(errors.description.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.description}
                onChange={(e) => handleChange(e.target.value, 'description')}
              />
              {errors.description
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
            <label>
              Logo
              <input
                type='text'
                name='logo'
                {...(errors.logo.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.logo}
                onChange={(e) => handleChange(e.target.value, 'logo')}
              />
              {errors.logo
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
            <label>
              Fecha Liberación
              <input
                type='date'
                name='date_release'
                data-testid='daterelease'
                {...(errors.date_release.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.date_release}
                onChange={(e) => handleChange(e.target.value, 'date_release')}
              />
              {errors.date_release
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
            <label style={{ color: 'gray' }}>
              Fecha Revisión
              <input
                type='date'
                disabled
                name='date_revision'
                data-testid='daterevision'
                {...(errors.date_revision.some((x) => x.value)
                  ? { style: { borderColor: 'red' } }
                  : {})}
                value={form?.date_revision}
                onChange={(e) => handleChange(e.target.value, 'date_revision')}
              />
              {errors.date_revision
                .filter((error) => error.value)
                .map((error) => (
                  <span style={{ color: 'red' }} key={error.message}>
                    {error.message}
                  </span>
                ))}
            </label>
          </div>
          <div className='actions'>
            <button className='buttonSecondary' type='reset'>
              Reiniciar
            </button>
            <button
              className='buttonPrimary'
              type='submit'
              disabled={isError}
              aria-label='enviar'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
