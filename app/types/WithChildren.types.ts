// WithChildren.types.ts
import type { ReactNode } from "react"

export type WithChildren<Value = {}> = Value & { children?: ReactNode }

/** EXAMPLE USE CASE
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 @type BlahProps = WithChildren<{
    title?: string
}>

 IF YOU DO NOT WANT TO PASS
 PROPS BE EXPLICIT!!!
 @type BlahProps = {
    //...WHAT EVER
    children?: never
}
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

export type ErrorType = WithChildren<{
	title?: string
}>

export type ModalType = WithChildren<{
  onClose?: () => void;
}>;

