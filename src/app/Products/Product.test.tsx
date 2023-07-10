import React from 'react'
import { render, screen } from '@testing-library/react'
import Products from './index'
import Table from './Table'
import { IProduct } from './types'

test('Render Agregar Button', () => {
  render(<Products />)
  const linkElement = screen.getByText(/Agregar/i)
  expect(linkElement).toBeInTheDocument()
})

test('Render Table', () => {
  render(<Table data={data} />)
  const element = screen.getByText('Tarjeta de credito')
  expect(element).toBeInTheDocument()
})

test('Verificacion de 5 elementos por pagina', () => {
  render(<Table data={data} />)
  const filas = screen.getAllByRole('row')
  expect(filas.length).toBeLessThanOrEqual(6)
})
test('Verificacion de conteo total de elementos', () => {
  render(<Table data={data} query='' />)
  const linkElement = screen.getByText('15 resultado/s')
  expect(linkElement).toBeInTheDocument()
})
test('Verificacion de busqueda por nombre de producto y conteo total', () => {
  render(<Table data={data} query='Producto 3' />)
  const element = screen.getByText('Producto 3')
  expect(element).toBeInTheDocument()
  const filas = screen.getAllByRole('row')
  expect(filas.length).toBeLessThanOrEqual(2)
  const resultElement = screen.getByText('1 resultado/s')
  expect(resultElement).toBeInTheDocument()
})

test('Render Table', async () => {
  render(<Table data={data} />)
  const element = screen.getByText('Tarjeta de credito')
  expect(element).toBeInTheDocument()
})

const data: IProduct[] = [
  {
    id: '001',
    name: 'Tarjeta de credito',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-02-01T00:00:00.000+00:00',
    date_revision: '2023-02-01T00:00:00.000+00:00',
    description: 'Tarjeta de bajo consumo',
  },
  {
    id: '002',
    name: 'Producto 2',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-03-01T00:00:00.000+00:00',
    date_revision: '2023-03-01T00:00:00.000+00:00',
    description: 'Descripción del producto 2',
  },
  {
    id: '003',
    name: 'Producto 3',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-04-01T00:00:00.000+00:00',
    date_revision: '2023-04-01T00:00:00.000+00:00',
    description: 'Descripción del producto 3',
  },
  {
    id: '004',
    name: 'Producto 4',
    logo: 'https://example.com/logo4.png',
    date_release: '2023-05-01T00:00:00.000+00:00',
    date_revision: '2023-05-01T00:00:00.000+00:00',
    description: 'Descripción del producto 4',
  },
  {
    id: '005',
    name: 'Producto 5',
    logo: 'https://example.com/logo5.png',
    date_release: '2023-06-01T00:00:00.000+00:00',
    date_revision: '2023-06-01T00:00:00.000+00:00',
    description: 'Descripción del producto 5',
  },
  {
    id: '006',
    name: 'Producto 6',
    logo: 'https://example.com/logo6.png',
    date_release: '2023-07-01T00:00:00.000+00:00',
    date_revision: '2023-07-01T00:00:00.000+00:00',
    description: 'Descripción del producto 6',
  },
  {
    id: '007',
    name: 'Producto 7',
    logo: 'https://example.com/logo7.png',
    date_release: '2023-08-01T00:00:00.000+00:00',
    date_revision: '2023-08-01T00:00:00.000+00:00',
    description: 'Descripción del producto 7',
  },
  {
    id: '008',
    name: 'Producto 8',
    logo: 'https://example.com/logo8.png',
    date_release: '2023-09-01T00:00:00.000+00:00',
    date_revision: '2023-09-01T00:00:00.000+00:00',
    description: 'Descripción del producto 8',
  },
  {
    id: '009',
    name: 'Producto 9',
    logo: 'https://example.com/logo9.png',
    date_release: '2023-10-01T00:00:00.000+00:00',
    date_revision: '2023-10-01T00:00:00.000+00:00',
    description: 'Descripción del producto 9',
  },
  {
    id: '010',
    name: 'Producto 10',
    logo: 'https://example.com/logo10.png',
    date_release: '2023-11-01T00:00:00.000+00:00',
    date_revision: '2023-11-01T00:00:00.000+00:00',
    description: 'Descripción del producto 10',
  },
  {
    id: '011',
    name: 'Producto 11',
    logo: 'https://example.com/logo11.png',
    date_release: '2023-12-01T00:00:00.000+00:00',
    date_revision: '2023-12-01T00:00:00.000+00:00',
    description: 'Descripción del producto 11',
  },
  {
    id: '012',
    name: 'Producto 12',
    logo: 'https://example.com/logo12.png',
    date_release: '2024-01-01T00:00:00.000+00:00',
    date_revision: '2024-01-01T00:00:00.000+00:00',
    description: 'Descripción del producto 12',
  },
  {
    id: '013',
    name: 'Producto 13',
    logo: 'https://example.com/logo13.png',
    date_release: '2024-02-01T00:00:00.000+00:00',
    date_revision: '2024-02-01T00:00:00.000+00:00',
    description: 'Descripción del producto 13',
  },
  {
    id: '014',
    name: 'Producto 14',
    logo: 'https://example.com/logo14.png',
    date_release: '2024-03-01T00:00:00.000+00:00',
    date_revision: '2024-03-01T00:00:00.000+00:00',
    description: 'Descripción del producto 14',
  },
  {
    id: '015',
    name: 'Producto 15',
    logo: 'https://example.com/logo15.png',
    date_release: '2024-04-01T00:00:00.000+00:00',
    date_revision: '2024-04-01T00:00:00.000+00:00',
    description: 'Descripción del producto 15',
  },
]
