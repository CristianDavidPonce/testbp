import { IProduct } from './types'
import { useEffect, useState } from 'react'
const url =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
const authorId = '1726484833'

export const createProduct = async (data: IProduct) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      authorId,
    },
    body: JSON.stringify(data),
  })
}

export const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState()
  useEffect(() => {
    setIsLoading(true)
    setError(undefined)
    fetch(url, {
      method: 'GET',
      headers: { authorId },
      mode: 'no-cors',
    })
      .then((x) => {
        if (!x.ok) {
          throw Error(x.statusText)
        }
        return x.json()
      })
      .then((x) => setData(x))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false))
  }, [])
  return {
    error,
    isError: Boolean(error),
    isLoading,
    data,
  }
}
