import { Button } from "@/components/ui/button"
import React from 'react'

export function ButtonSecondary({ size, className }) {
  return <Button variant="secondary" className={className} size={size}>Secondary</Button>
}

export function ButtonOutline({ size, className }) {
  return <Button variant="outline" className={className} size={size}>Outline</Button>
}
export function ButtonPrimary({ size, className }) {
  return <Button variant="default" className={className} size={size}>Outline</Button>
}

import { buttonVariants } from "@/components/ui/button"

export function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  )
}
