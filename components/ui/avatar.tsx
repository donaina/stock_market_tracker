"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders a Radix Avatar Root with base avatar styling and merged class names.
 *
 * @param className - Additional class names to merge with the component's default avatar styles
 * @returns The Avatar Root element with composed `className`, `data-slot="avatar"`, and all other props forwarded
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the avatar image slot using Radix Avatar's Image primitive with base sizing styles.
 *
 * @param className - Additional class names to merge with the component's base styles
 * @returns The avatar image element with combined classes and any passed props
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders the avatar fallback slot shown when an avatar image is not available.
 *
 * @param className - Additional CSS classes appended to the fallback's base styles
 * @returns A React element that renders the avatar fallback with base styling and the provided `className`
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
