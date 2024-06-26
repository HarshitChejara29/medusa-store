import React from "react"

import { IconProps } from "types/icon"

const Disability: React.FC<IconProps> = ({
  size = "30",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M24 19v-7h-1v-1c0-1.657-1.343-3-3-3h-13v4h-6v-7h-1v14h1v-2h22v2h1zm-23-3h22v-3h-22v3zm7-4h14v-1c0-1.105-.895-2-2-2h-12v3zm-4-5c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"  stroke={color}
        // strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Disability
