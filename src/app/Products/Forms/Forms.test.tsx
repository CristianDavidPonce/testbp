import { render, screen, waitFor } from '@testing-library/react'
import Form from './Form'
import { IProduct } from '../types'
import userEvent from '@testing-library/user-event'

describe('<Form/> tests props y actualización de datos', () => {
  const defaultValues: IProduct = {
    id: '001',
    name: 'Producto',
    logo: 'url',
    description: 'Descripcion del producto',
    date_release: '2020-10-10',
    date_revision: '2021-10-10',
  }
  test('Verificacion del prop titulo', () => {
    const title = 'Registrar Producto'
    render(<Form title={title} onSubmit={() => null} />)
    const element = screen.getByText(title)
    expect(element).toBeInTheDocument()
  })

  test('Verificacion del prop defaultValues', () => {
    const defaultValues: IProduct = {
      id: '001',
      name: 'Producto',
      logo: 'url',
      description: 'Descripcion del producto',
      date_release: '2020-10-10',
      date_revision: '2021-10-10',
    }

    render(
      <Form
        title='Registrar Producto'
        onSubmit={() => null}
        defaultValues={defaultValues}
      />
    )
    const form = screen.getByRole('form', { name: 'form' })
    expect(form).toHaveFormValues({
      ...defaultValues,
    })
  })
  test('Verificacion: prop idIsDisabled = true, el input ID deshabilitado', () => {
    render(
      <Form title='Registrar Producto' onSubmit={() => null} idIsDisabled />
    )
    const element = screen.getByRole('textbox', { name: 'id' })
    expect(element).toBeInTheDocument()
    expect(element).toBeDisabled()
  })
  test('Verificacion de actualizacion de input values', async () => {
    const updateValues: IProduct = {
      id: '002',
      name: 'Producto 2',
      logo: 'url 2',
      description: 'Descripcion del producto 2',
      date_release: '2021-10-10',
      date_revision: '2022-10-10',
    }

    render(
      <Form
        title='Registrar Producto'
        onSubmit={() => null}
        defaultValues={defaultValues}
      />
    )
    const inputName = screen.getByRole('textbox', { name: 'name' })
    await waitFor(() => {
      userEvent.clear(inputName)
    })
    await waitFor(() => {
      userEvent.type(inputName, updateValues.name)
    })
    expect(inputName).toHaveValue(updateValues.name)

    const description = screen.getByRole('textbox', { name: 'description' })
    await waitFor(() => {
      userEvent.clear(description)
    })
    await waitFor(() => {
      userEvent.type(description, updateValues.name)
    })
    expect(inputName).toHaveValue(updateValues.name)
  })
})

describe('<Form/> tests validaciones', () => {
  test('Validación: Todos los  campos son requeridos', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    expect(screen.getByText('Id es requerido')).toBeInTheDocument()
    expect(screen.getByText('Nombre es requerido')).toBeInTheDocument()
    expect(screen.getByText('Descripcion es requerido')).toBeInTheDocument()
    expect(screen.getByText('Logo es requerido')).toBeInTheDocument()
    expect(
      screen.getByText('Fecha de liberación es requerido')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Fecha de revisión es requerido')
    ).toBeInTheDocument()
  })

  test('Validación: Id min 3 caracteres, max 10 caracteres', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    const element = screen.getByRole('textbox', { name: 'id' })
    await waitFor(() => {
      userEvent.type(element, '00')
    })
    expect(screen.getByText('Mínimo 3 caracteres'))

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(element, '000000000000')
    })
    expect(screen.getByText('Máximo 10 caracteres')).toBeInTheDocument()

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(element, '1000000')
    })
    expect(() => screen.getByText('Máximo 10 caracteres')).toThrow()
    expect(() => screen.getByText('Mínimo 3 caracteres')).toThrow()
  })

  test('Validación: Name min 5 caracteres, max 100 caracteres', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    const element = screen.getByRole('textbox', { name: 'name' })
    await waitFor(() => {
      userEvent.type(element, '00')
    })
    expect(screen.getByText('Mínimo 5 caracteres'))

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(
        element,
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam iusto consequatur, soluta adipisci doloremque laborum, minus, excepturi itaque veniam asperiores necessitatibus quod. Ducimus, quis? Repudiandae sit rem similique error soluta. '
      )
    })
    expect(screen.getByText('Máximo 100 caracteres')).toBeInTheDocument()

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(element, '1000000')
    })
    expect(() => screen.getByText('Máximo 100 caracteres')).toThrow()
    expect(() => screen.getByText('Mínimo 5 caracteres')).toThrow()
  })

  test('Validación: Description min 10 caracteres, max 200 caracteres', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    const element = screen.getByRole('textbox', { name: 'description' })
    await waitFor(() => {
      userEvent.type(element, '00')
    })
    expect(screen.getByText('Mínimo 10 caracteres'))

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(
        element,
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam iusto consequatur, soluta adipisci doloremque laborum, minus, excepturi itaque veniam asperiores necessitatibus quod. Ducimus, quis? Repudiandae sit rem similique error soluta. '
      )
    })
    expect(screen.getByText('Máximo 200 caracteres')).toBeInTheDocument()

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(element, '10000000000000')
    })
    expect(() => screen.getByText('Máximo 200 caracteres')).toThrow()
    expect(() => screen.getByText('Mínimo 10 caracteres')).toThrow()
  })

  test('Validación: Fecha de liberación debe ser igual o mayor a la fecha actual', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    const element = screen.getByTestId('daterelease')
    const validationText =
      'Fecha de liberación debe ser igual o mayor a la fecha actual'
    await waitFor(() => {
      userEvent.type(element, '2022-01-01')
    })
    expect(screen.getByText(validationText))

    await waitFor(() => {
      userEvent.clear(element)
    })
    await waitFor(() => {
      userEvent.type(element, '2024-01-01')
    })

    expect(() => screen.getByText(validationText)).toThrow()
  })
  test('Validación: Fecha de revisión debe ser exactamente un año posterior a la fecha de liberación', async () => {
    render(<Form title='Registrar Producto' onSubmit={() => null} />)
    const elementRelease = screen.getByTestId('daterelease')

    const validationText =
      'Fecha de revisión debe ser exactamente un año posterior a la fecha de liberación'
    await waitFor(() => {
      userEvent.clear(elementRelease)
    })
    await waitFor(() => {
      userEvent.type(elementRelease, '2024-01-01')
    })

    expect(() => screen.getByText(validationText)).toThrow()
  })

  test('Verificacion: boton Enviar deshabilitado al existir errores', () => {
    const defaultValues: IProduct = {
      id: '00',
      name: 'Producto 01',
      logo: 'url',
      description: 'Descripcion del producto otra',
      date_release: '2023-10-10',
      date_revision: '2024-10-10',
    }

    render(
      <Form
        title='Registrar Producto'
        onSubmit={() => null}
        defaultValues={defaultValues}
      />
    )
    const element = screen.getByRole('button', { name: 'enviar' })
    expect(element).toBeInTheDocument()
    expect(element).toBeDisabled()
  })
  test('Verificacion: boton Enviar habilitado al no existir errores', () => {
    const defaultValues: IProduct = {
      id: '001',
      name: 'Producto 01',
      logo: 'url',
      description: 'Descripcion del producto otra',
      date_release: '2023-10-10',
      date_revision: '2024-10-10',
    }

    render(
      <Form
        title='Registrar Producto'
        onSubmit={() => null}
        defaultValues={defaultValues}
      />
    )
    const element = screen.getByRole('button', { name: 'enviar' })
    expect(element).toBeInTheDocument()
    expect(element).not.toBeDisabled()
  })
})
