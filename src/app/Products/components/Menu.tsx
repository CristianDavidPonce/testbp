import React, { useEffect, useRef, useState } from 'react'
interface IProps {
  id: string
}
export const Menu = ({ id }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const menuRef = useRef<any>(null)
  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsOpen(!isOpen)
    setPosition({ x: event.clientX, y: event.clientY })
  }

  const handleDelete = () => {
    alert(`Está seguro de eliminar el producto con id: ${id}`)
    setIsOpen(false)
  }
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ width: 20, cursor: 'pointer' }} onClick={toggleMenu}>
        <Dots />
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          id={id}
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '4px',
            zIndex: 1,
          }}
        >
          <a href={`/edit?id=${id}`} className='menuItem'>
            Editar
          </a>
          <a
            onClick={() => handleDelete()}
            className='menuItem'
            style={{ cursor: 'pointer' }}
          >
            Eliminar
          </a>
        </div>
      )}
    </div>
  )
}

export default Menu

const Dots = () => (
  <svg fill='#000000' viewBox='0 0 32 32' enableBackground='new 0 0 32 32'>
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      <path
        d='M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z'
        id='XMLID_294_'
      ></path>
      <path
        d='M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z'
        id='XMLID_295_'
      ></path>
      <path
        d='M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z'
        id='XMLID_297_'
      ></path>
    </g>
  </svg>
)
