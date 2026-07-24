import type { ReactNode } from 'react'

type OutlineButtonProps = {
  children: ReactNode
  variant?: 'dark' | 'light'
  className?: string
  href?: string
}

export function OutlineButton({
  children,
  variant = 'dark',
  className = '',
  href,
}: OutlineButtonProps) {
  const styles =
    variant === 'light'
      ? 'border-white/35 text-white hover:bg-white/10'
      : 'border-navy/25 text-navy hover:bg-navy/5'

  const classes = `inline-flex items-center justify-center px-[23px] py-[13px] text-sm border rounded-sm transition-colors ${styles} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
