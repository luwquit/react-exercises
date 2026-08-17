export function CardProps({header, footer}) {
  if (header) {
    return <div className="card">{header}</div>
  } else if (footer) {
    return <div className="card">{footer}</div>
  }
}