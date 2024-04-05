import { useForm } from 'react-hook-form';
import styles from './styles/createBoardForm.module.scss';
import createBoardRequest from '../../api/createBoardRequest';
import updateBoards from '../../helpers/createBoard';

type CreateBoardFields = { 
    name: string
}

const CreateBoardForm = ({setIsVisible}: {setIsVisible: Function}) => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }, 
        reset,
    } = useForm<CreateBoardFields>();

    function createBoard(data: CreateBoardFields) {
        createBoardRequest(data)
        .then((responseDto: any) => {
            updateBoards(responseDto.boards);
            setIsVisible();
            reset();
        })
    }

    return (
        <div className='flex items-center justify-center w-screen h-lvh h-screen bg-slate-600 fixed top-0 z-10'>
            <form className={styles.form} onSubmit={handleSubmit(createBoard)} >
                <button onClick={() => setIsVisible()}>X</button>
                <input type="text" {...register('name', {
                    required: 'Enter board name',
                })} />
                <input className={styles.sendBtn} type="submit" />
            </form>
        </div>
    );
};

export default CreateBoardForm;