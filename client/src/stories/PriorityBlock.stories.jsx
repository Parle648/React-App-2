import PriorityBlock from "../entities/TaskCard/UI/PriorityBlock/PriorityBlock";

export default {
    title: 'PriorityBlock',
    component: PriorityBlock
}

const Template = args => <PriorityBlock {...args}></PriorityBlock>

export const Low = Template.bind({})
Low.args = {
    priority: 'low'
}

export const Middle = Template.bind({})
Middle.args = {
    priority: 'middle'
}

export const Top = Template.bind({})
Top.args = {
    priority: 'top'
}