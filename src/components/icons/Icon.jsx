function Icon({ id, className = '' }) {
  return (
    <svg className={`icon ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

export default Icon
