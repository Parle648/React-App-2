import { render } from '@testing-library/react';
import TaskCart from './TaskCard';
import { TaskContext } from './context/taskContext';
import store from '../../app/store/store';
import { Provider } from 'react-redux';

describe('TaskCart Component', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <TaskContext.Provider value={{ props: {     
                    id: 1,
                    priority: 'low',
                    name: "task name",
                    description: 'task description',
                    deadline: 'deadline',
                    listName: 'string' } }}>
                            <TaskCart  
                                id={1}
                                name='task name'
                                description='task description'
                                deadline='23.15.2021'
                                priority='low'
                                listName='List name'/>
                </TaskContext.Provider>
            </Provider>
        );
    });
});

