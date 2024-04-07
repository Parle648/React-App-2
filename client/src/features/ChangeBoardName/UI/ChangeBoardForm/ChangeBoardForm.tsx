import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../shared/UI/Input/Input';
import Button from '../../../../shared/UI/Button/Button';
import styles from './styles/changeBoardForm.module.scss';
import patchBoard from '../../api/patchBoard';
import updateBoards from '../../helpers/updateBoards';
import updateCurrentBoard from '../../helpers/updateCurrentBoard';

const ChangeBoardForm = ({children, id, setIsVisible}: {children: ReactNode, id: number, setIsVisible: Function}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<{name: string}>();

    function updateNameFunc(data: any) {
        patchBoard(data.name, id)
        .then((responseData) => {
            if (responseData.status === 200) {
                updateBoards(responseData.boards);
                updateCurrentBoard({});
                reset();
                setIsVisible();
            } else {
                alert('something went wrong');
            };
        });
    };

    return (
        <div className='flex items-center justify-center w-screen h-lvh h-screen bg-slate-600 bg-opacity-50 fixed top-0 left-0 z-10'>
            <form className={styles.form} onSubmit={handleSubmit(updateNameFunc)}>
                {children}
                <h2 className=''>Enter here your new board name</h2>
                <Input style='create' name="name" register={{...register('name', {
                    required: 'Enter new name for board'
                })}} />
                {errors.name && <h2>{errors.name.message}</h2>}
                <Button type='submit' style='modify' >Changge board name</Button>
            </form>
        </div>
    );
};

export default ChangeBoardForm;