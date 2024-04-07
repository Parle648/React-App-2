import { MouseEventHandler, ReactElement } from "react"

export type ButtonProps = {
    children?: string | ReactElement, 
    width?: number, 
    handleFunction: MouseEventHandler<HTMLButtonElement> | any, 
    type?: 'submit', 
    style?: 'dashed' | 'delete' | 'create' | 'modify'
}