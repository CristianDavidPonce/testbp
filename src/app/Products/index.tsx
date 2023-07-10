import { useGetProducts } from './queries'
import Layout from '../Layout'
import Table from './Table'
import { IProduct } from './types'
import React, { useState } from 'react'

const Products = () => {
  const products = useGetProducts()
  const [query, setQuery] = useState<string>('')
  const handleQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value)
  }
  return (
    <Layout>
      <div className='container'>
        {products.isError && (
          <p style={{ color: 'red' }}>
            {'Error en la consulta: ' + products.error}
          </p>
        )}
        <div className='top'>
          <input onChange={handleQuery} placeholder='Buscar por producto...' />
          <a href='/register' className='buttonPrimary'>
            Agregar
          </a>
        </div>
        <Table data={data} query={query} />
      </div>
    </Layout>
  )
}

export default Products

export const data: IProduct[] = [
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
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-05-01T00:00:00.000+00:00',
    date_revision: '2023-05-01T00:00:00.000+00:00',
    description: 'Descripción del producto 4',
  },
  {
    id: '005',
    name: 'Producto 5',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-06-01T00:00:00.000+00:00',
    date_revision: '2023-06-01T00:00:00.000+00:00',
    description: 'Descripción del producto 5',
  },
  {
    id: '006',
    name: 'Producto 6',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-07-01T00:00:00.000+00:00',
    date_revision: '2023-07-01T00:00:00.000+00:00',
    description: 'Descripción del producto 6',
  },
  {
    id: '007',
    name: 'Producto 7',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-08-01T00:00:00.000+00:00',
    date_revision: '2023-08-01T00:00:00.000+00:00',
    description: 'Descripción del producto 7',
  },
  {
    id: '008',
    name: 'Producto 8',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-09-01T00:00:00.000+00:00',
    date_revision: '2023-09-01T00:00:00.000+00:00',
    description: 'Descripción del producto 8',
  },
  {
    id: '009',
    name: 'Producto 9',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-10-01T00:00:00.000+00:00',
    date_revision: '2023-10-01T00:00:00.000+00:00',
    description: 'Descripción del producto 9',
  },
  {
    id: '010',
    name: 'Producto 10',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-11-01T00:00:00.000+00:00',
    date_revision: '2023-11-01T00:00:00.000+00:00',
    description: 'Descripción del producto 10',
  },
  {
    id: '011',
    name: 'Producto 11',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2023-12-01T00:00:00.000+00:00',
    date_revision: '2023-12-01T00:00:00.000+00:00',
    description: 'Descripción del producto 11',
  },
  {
    id: '012',
    name: 'Producto 12',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2024-01-01T00:00:00.000+00:00',
    date_revision: '2024-01-01T00:00:00.000+00:00',
    description: 'Descripción del producto 12',
  },
  {
    id: '013',
    name: 'Producto 13',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2024-02-01T00:00:00.000+00:00',
    date_revision: '2024-02-01T00:00:00.000+00:00',
    description: 'Descripción del producto 13',
  },
  {
    id: '014',
    name: 'Producto 14',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2024-03-01T00:00:00.000+00:00',
    date_revision: '2024-03-01T00:00:00.000+00:00',
    description: 'Descripción del producto 14',
  },
  {
    id: '015',
    name: 'Producto 15',
    logo: 'https://source.unsplash.com/user/c_v_r/100x100',
    date_release: '2024-04-01T00:00:00.000+00:00',
    date_revision: '2024-04-01T00:00:00.000+00:00',
    description: 'Descripción del producto 15',
  },
]
