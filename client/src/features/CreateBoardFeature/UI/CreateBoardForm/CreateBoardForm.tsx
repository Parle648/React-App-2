import { useForm } from 'react-hook-form';
import styles from './styles/createBoardForm.module.scss';
import createBoardRequest from '../../api/createBoardRequest';
import updateBoards from '../../helpers/createBoard';

type CreateBoardFields = { 
    name: string
}

const CreateBoardForm = () => {

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
            updateBoards(responseDto.boards)
            reset();
        })
    }

    return (
        <form onSubmit={handleSubmit(createBoard)} >
            <input type="text" {...register('name', {
                required: 'Enter board name',
            })} />
            <input className={styles.sendBtn} type="submit" />
        </form>
    );
};

export default CreateBoardForm;