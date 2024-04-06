import Button from '../../shared/UI/Button/Button';
import useToggle from '../../shared/lib/hooks/useToggle';
import CreateBoardForm from './UI/CreateBoardForm/CreateBoardForm';

const CreateBoardFeature = () => {
    const [isVisible, setIsVisible] = useToggle(false);

    return (
        <>
            <div className='m-6'>
                <Button handleFunction={setIsVisible} style='dashed'>Create Board</Button>
            </div>
            {isVisible && <CreateBoardForm setIsVisible={setIsVisible} />}
            
        </>
    );
};

export default CreateBoardFeature;