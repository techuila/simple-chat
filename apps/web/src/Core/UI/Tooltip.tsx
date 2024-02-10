type Props = {
  children: React.ReactNode
  title: string | React.ReactNode
  left?: boolean
  right?: boolean
  className?: string
}

export function Tooltip({ className, title, children, left, right }: Props) {
  const order = left ? 'order-1' : right ? 'order-3' : 'order-3'
  return (
    <div className={`has-tooltip ${className}`}>
      <div className={`order-2 ${className}`}>{children}</div>
      <span className={`${order} tooltip`}>{title}</span>
    </div>
  )
}
