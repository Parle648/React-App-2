import { MouseEventHandler } from "react"

export type ButtonProps = {
    children?: string, 
    width?: number, 
    handleFunction: MouseEventHandler<HTMLButtonElement>, 
    type?: 'submit', 
    style?: 'dashed' | 'delete' | 'create' | 'modify'
}