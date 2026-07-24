type LogoProps = {
  className?: string
  showText?: boolean
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          stroke="#C79A5C"
          strokeWidth="1.2"
        />
        <path
          d="M9 7h16v18H9V7z"
          stroke="white"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M13 16h8v9h-8v-9z"
          stroke="#C79A5C"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
      {showText && (
        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
          Gelora Corporation
        </span>
      )}
    </div>
  )
}
