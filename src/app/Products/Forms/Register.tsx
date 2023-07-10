import React, { useState } from 'react'
import Form from './Form'
import { IProduct } from '../types'
import Layout from '../../Layout'

const Register = () => {
  const [product, setProduct] = useState<IProduct>()
  return (
    <Layout>
      {product ? (
        <div className='card'>
          <p>Esto se enviará al servidor</p>
          <code style={{ whiteSpace: 'pre-line' }}>
            {JSON.stringify(product, null, 2)}
          </code>
          <a className='buttonPrimary' href='/' style={{ alignSelf: 'center' }}>
            Ir a Página Principal
          </a>
        </div>
      ) : (
        <Form title='Formulario de registro' onSubmit={setProduct} />
      )}
    </Layout>
  )
}

export default Register
