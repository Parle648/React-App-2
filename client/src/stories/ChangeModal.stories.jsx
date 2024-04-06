import ChangeModal from "../entities/CgangeModal/ChangeModal";
import DeleteBoard from "../features/DeleteBoard/DeleteBoard";

export default {
    title: 'ChangeModal',
    component: ChangeModal
}

const Template = (args) => <div className="flex justify-center items-center relative w-2/5 left-0"><ChangeModal {...args}>{args.children}</ChangeModal></div>

export const Board = Template.bind({})
Board.args = {
    children: <DeleteBoard />
}