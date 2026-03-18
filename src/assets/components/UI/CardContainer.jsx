import React from 'react'

const CardContainer = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-800 p-5 flex gap-4 rounded-md ${className}`}>
      {children}
    </div>
  )
}

export default CardContainer
