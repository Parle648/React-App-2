export type ButtonProps = {
    children?: string, 
    width?: number, 
    handleFunction: Function, 
    type?: 'submit', 
    style?: 'dashed' | 'delete' | 'create' | 'modify'
}