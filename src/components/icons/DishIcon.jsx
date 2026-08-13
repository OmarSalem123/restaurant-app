function DishIcon({ id, className = '' }) {
  return (
    <svg className={`dish-icon ${className}`} role="presentation" aria-hidden="true" viewBox="0 0 64 64">
      <use href={`/icons.svg#dish-${id}`}></use>
    </svg>
  )
}

export default DishIcon
