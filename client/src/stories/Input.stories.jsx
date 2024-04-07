import Input from "../shared/UI/Input/Input";

export default {
    title: 'Input',
    component: Input,
}

const Template = args => <Input {...args} />

export const General = Template.bind({});
General.args = {
    style: 'create', 
    name: 'input'
};

export const Disabled = Template.bind({});
Disabled.args = {
    style: 'disabled', 
    name: 'input'
};

export const Date = Template.bind({});
Date.args = {
    style: 'create', 
    type: 'date',
    name: 'input'
};
