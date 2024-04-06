import Button from "../shared/UI/Button/Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        handleFunction: {
            action: 'handleFunction works'
        }
    }
}

const Template = args => <Button {...args}></Button>

export const Create = Template.bind({});
Create.args = {
    children: 'Create',
    width: 150,
    type: 'submit',
    style: 'create'
};

export const Delete = Template.bind({});
Delete.args = {
    children: 'Delete',
    style: 'delete'
};

export const Dashed = Template.bind({});
Dashed.args = {
    children: 'Create something',
    style: 'dashed'
};

export const Modify = Template.bind({});
Modify.args = {
    children: 'Change',
    style: 'modify'
};