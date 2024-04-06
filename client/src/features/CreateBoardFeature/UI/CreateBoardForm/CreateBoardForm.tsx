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
        <div className='flex items-center justify-center w-screen h-lvh h-screen bg-slate-600 bg-opacity-50 fixed top-0 z-10'>
            <form className={styles.form} onSubmit={handleSubmit(createBoard)} >
                <button className={styles.close} onClick={() => setIsVisible()}>X</button>
                <h2 className={styles.title}>Enter board name</h2>
                <input className={styles.input} {...register('name', {
                    required: 'Enter board name',
                })} />
                <span>{errors.name && `${errors.name.message}`}</span>
                <button className={styles.sendBtn} type="submit">Отправить запрос</button>
            </form>
        </div>
    );
};

export default CreateBoardForm;