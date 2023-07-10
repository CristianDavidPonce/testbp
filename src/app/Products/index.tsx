import { useGetProducts } from './queries'
import Layout from '../Layout'
import Table from './Table'

import React, { useState } from 'react'
import { data } from '../../libs/dataTest'

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
