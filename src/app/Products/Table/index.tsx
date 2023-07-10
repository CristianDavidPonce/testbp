import React, { ReactNode, useEffect, useState } from 'react'
import { IProduct } from '../types'
import moment from 'moment'
import Menu from '../components/Menu'
interface IProps {
  data?: IProduct[]
  query?: string
}
const Table = ({ data, query = '' }: IProps) => {
  const dataFilter = data?.filter((x) =>
    x.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
  const [dataPaginated, setDataPaginated] = useState<IProduct[]>([])
  const [page, setPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(5)
  const total = dataFilter?.length || 0
  const maxPages = Math.ceil(total / limit) - 1
  useEffect(() => {
    setDataPaginated(dataFilter?.slice(page * limit, (page + 1) * limit) || [])
  }, [page, limit, query, data])
  const handleBackPage = () => {
    setPage((x) => (x === 0 ? x : x - 1))
  }
  const handleNextPage = () => {
    setPage((x) => (x === maxPages ? x : x + 1))
  }
  return (
    <div className='card'>
      <table>
        <tbody>
          <tr>
            {colums.map((x) => (
              <th key={x.dataIndex}>{x.title}</th>
            ))}
          </tr>
          {dataPaginated?.map((item) => (
            <tr key={item.name}>
              {colums.map((x) => (
                <td key={x.dataIndex}>
                  {x.render ? x.render(item[x.dataIndex]) : item[x.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
          {dataFilter && total === 0 && <p>No hay datos</p>}
        </tbody>
      </table>
      <div className='top'>
        <p>{total} resultado/s</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: 5,
            alignItems: 'center',
          }}
        >
          <button
            onClick={handleBackPage}
            disabled={page === 0}
            className='buttonSecondary'
          >
            {'<'}
          </button>
          <button
            onClick={handleNextPage}
            disabled={page === maxPages}
            className='buttonSecondary'
          >
            {'>'}
          </button>
          <p>Página {page + 1}</p>
          <select
            placeholder='paginas'
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option>5</option>
            <option>10</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Table

interface IColumn {
  title: string
  dataIndex: keyof IProduct
  render?: (x: string) => ReactNode
}
const colums: IColumn[] = [
  {
    title: 'Logo',
    dataIndex: 'logo',
    render: (x) => (
      <img src={x} style={{ width: 40, height: 40, marginBlock: 10 }} />
    ),
  },
  {
    title: 'Nombre del producto',
    dataIndex: 'name',
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
  },
  {
    title: 'Fecha de lanzamiento',
    dataIndex: 'date_release',
    render: (x) => x && moment(x).format('YYYY-MM-DD'),
  },
  {
    title: 'Fecha de revision',
    dataIndex: 'date_revision',
    render: (x) => x && moment(x).format('YYYY-MM-DD'),
  },
  {
    title: '',
    dataIndex: 'id',
    render: (x) => <Menu id={x} />,
  },
]
