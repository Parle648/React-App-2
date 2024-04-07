import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../Button"
import styles from '../styles/button.module.scss';
import userEvent from "@testing-library/user-event"

describe('Button tests', () => {
    it('Button renders and renders props', () => {
        render(<Button>props</Button>)

        expect(screen.getByText(/props/i)).toBeInTheDocument()
    })

    it('Button width correct', () => {
        render(<Button width={150}>props</Button>)

        expect(screen.getByRole('button')).toHaveStyle({width: '150px'})
    })

    it('Button handleFunction works', () => {
        const mockFunction = jest.fn();
        render(<Button handleFunction={mockFunction}>props</Button>)

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockFunction).toHaveBeenCalled()
    })

    it('Button adds type submit', () => {
        render(<Button type="submit">props</Button>)

        expect(screen.getByRole('button').getAttribute('type')).toBe('submit')
    })

    it('Button adds style dashed', () => {
        render(<Button style="dashed">props</Button>)

        expect(screen.getByRole('button')).toHaveClass(styles.dashed)
    })

    it('Button adds style modify', () => {
        render(<Button style="modify">props</Button>)

        expect(screen.getByRole('button')).toHaveClass(styles.modify)
    })

    it('Button adds style create', () => {
        render(<Button style="create">props</Button>)

        expect(screen.getByRole('button')).toHaveClass(styles.create)
    })

    it('Button adds style delete', () => {
        render(<Button style="delete">props</Button>)

        expect(screen.getByRole('button')).toHaveClass(styles.delete)
    })
})