import { render, screen } from "@testing-library/react"
import AddTaskForm from "./AddTaskForm"
import store from "../../../../app/store/store"
import { Provider } from "react-redux"
import userEvent from "@testing-library/user-event"

const setIsVisible = () => {}

describe('Tests for AddTaskForm', () => {
    it('Add taskForm renders', () => {
        render(
        <Provider store={store}>
            <AddTaskForm visible={false} list_id={1} setIsVisible={setIsVisible} >
                'some text'
            </AddTaskForm>
        </Provider>
        )
    })
    
    it('AddTaskForm renders childrens', () => {
        render(
        <Provider store={store}>
            <AddTaskForm visible={false} list_id={1} setIsVisible={setIsVisible} >
                'some text'
            </AddTaskForm>
        </Provider>
        );

        expect(screen.getByText(/some text/i)).toBeInTheDocument();
    })
})