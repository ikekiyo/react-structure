import React from 'react'

export type Props = {
  label: string
  color?: 'primary' | 'secondary'
  onClick: () => void
}

export const Button: React.FC<Props> = (props) => {
  const { label, color = 'primary' } = props

  let btnColor = 'bg-green-600'
  let hoverColor = 'bg-green-700'
  switch (color) {
    case 'primary':
      btnColor = 'bg-green-600'
      hoverColor = 'bg-green-700'
      break
    case 'secondary':
      btnColor = 'bg-yellow-600'
      hoverColor = 'bg-yellow-700'
      break
    default:
      break
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md border border-transparent ${btnColor} ${hoverColor} px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto`}
    >
      {label}
    </button>
  )
}

export default Button
