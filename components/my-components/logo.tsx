import { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  colors?: string[]
  className?: string
}

const Logo = ({
  width,
  height,
  colors = ['#4CAF50', '#2E7D32', '#145A32'],
  className,
  ...props
}: LogoProps) => (
  <>
    <svg
      viewBox='0 0 128 128'
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      className={`w-full h-full object-contain ${className || ''}`}
      {...props}
    >
      <defs>
        <linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor={colors[0]} />
          <stop offset='100%' stopColor={colors[1]} />
        </linearGradient>
      </defs>

      <path
        d='M64 8
           C40 24, 28 48, 28 72
           C28 100, 48 116, 64 120
           C80 116, 100 100, 100 72
           C100 48, 88 24, 64 8 Z'
        fill='url(#g2)'
      />

      <path
        d='M64 20V108
           M64 68 C56 66, 52 64, 46 60
           M64 68 C72 66, 76 64, 82 60
           M64 88 C56 86, 52 84, 46 80
           M64 88 C72 86, 76 84, 82 80'
        fill='none'
        stroke={colors[2]}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
)
export default Logo
