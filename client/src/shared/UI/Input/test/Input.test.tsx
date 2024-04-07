import { render, screen } from "@testing-library/react"
import Input from "../Input"
import styles from '../styles/input.module.scss'

describe('Input tests', () => {
    it('Input renders', () => {
        render(<Input name='name' style='create' />)
    })

    it('Input adds name correct', () => {
        render(<Input name='name' style='create' />)

        expect(screen.getByRole('textbox').dataset.name).toBe('name')
    })

    it('Input renders date variant', () => {
        render(<Input type='date' name='name' style='create' />)

        expect(screen.getByTestId('input').getAttribute('type')).toBe('date')
    })

    it('Input renders disabled style', () => {
        render(<Input type='date' name='name' style='disabled' />)

        expect(screen.getByTestId('input')).toHaveClass(styles.disabled)
    })
})