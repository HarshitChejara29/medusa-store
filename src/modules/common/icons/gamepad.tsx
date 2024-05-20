import React from "react"

import { IconProps } from "types/icon"

const Gamepad: React.FC<IconProps> = ({
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
        d="M19.46 7.594c2.21 5.602 2.54 8.12 2.54 9.123 0 .797-.299.866-.525.664-2.932-2.607-3.57-3.38-5.858-3.38h-7.233c-2.282 0-2.895.746-5.858 3.381-.228.201-.526.13-.526-.665 0-1.003.33-3.522 2.541-9.123.639-1.616 1.763-1.88 2.771-1.361 3.068 1.581 6.498 1.482 9.377 0 1.002-.518 2.129-.263 2.771 1.361zm-1.836-3.594c-.656 0-1.298.17-1.852.456-2.397 1.235-5.146 1.236-7.544 0-.554-.286-1.196-.456-1.852-.456-1.403 0-2.873.777-3.695 2.86-1.736 4.396-2.681 7.794-2.681 9.857 0 1.586.56 2.59 1.749 3.178.143.071.297.105.449.105.243 0 .483-.087.672-.255l3.109-2.745c.558-.494 1.044-1.004 2.404-1.004h7.232c1.36 0 1.847.51 2.404 1.004l3.109 2.745c.191.168.432.255.674.255.153 0 .307-.034.449-.105 1.189-.588 1.749-1.592 1.749-3.179 0-2.062-.945-5.461-2.68-9.856-.822-2.083-2.293-2.86-3.696-2.86zm-2.874 5.75c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm1.75 3.25c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm-10.734-2.25c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm4.5 0c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z"
        stroke={color}
        // strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Gamepad
