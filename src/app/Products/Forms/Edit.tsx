import React, { useState } from 'react'
import Form from './Form'
import { IProduct } from '../types'
import Layout from '../../Layout'
import { useSearchParams } from 'react-router-dom'

import moment from 'moment'
import { data } from '../../../libs/dataTest'

const Edit = () => {
  const [product, setProduct] = useState<IProduct>()
  const [params] = useSearchParams()
  const productEdit = data.find((x) => x.id === params.get('id'))
  return (
    <Layout>
      {productEdit ? (
        product ? (
          <div className='card'>
            <p>Esto se enviará al servidor</p>
            <code style={{ whiteSpace: 'pre-line' }}>
              {JSON.stringify(product, null, 2)}
            </code>
            <a
              className='buttonPrimary'
              href='/'
              style={{ alignSelf: 'center' }}
            >
              Ir a Página Principal
            </a>
          </div>
        ) : (
          <Form
            title='Formulario de Actualización'
            onSubmit={setProduct}
            idIsDisabled
            defaultValues={{
              ...productEdit,
              date_release: moment(productEdit?.date_release).format(
                'YYYY-MM-DD'
              ),
              date_revision: moment(productEdit?.date_revision).format(
                'YYYY-MM-DD'
              ),
            }}
          />
        )
      ) : (
        <p>Cargando</p>
      )}
    </Layout>
  )
}

export default Edit
