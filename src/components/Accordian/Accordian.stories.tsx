import type { Meta, StoryObj } from "@storybook/react"
import Accordian from "./Accordian"
import AccordianItem from "./AccordianItem"
import "../../styles/output.css"

const meta: Meta<typeof Accordian> = {
    component: Accordian,
};

export default meta;

type Story = StoryObj<typeof Accordian>;

export const Something: Story = {
    args: {

    },
    render: () => 
    <>
        <Accordian>
            <AccordianItem 
            title="What are the job titles of a Frontend Developer">
                Front-end developers are also known as front-end engineers, front-end web developers, JavaScript Developers, HTML/CSS Developer, front-end web designers, and front-end web architects.

                Each of these roles mostly encompass the same front-end development skills but require different levels of expertise in different front-end development skills. It's better to look at the job description to get an idea about the job requirements.
            </AccordianItem>
            <AccordianItem title="How to become a Frontend Developer">
            Start with learning HTML and CSS; don't wait to fully master these and start building simple projects as soon as possible. You could try rebuilding the frontend of your favorite websites using HTML and CSS to start with. Do as many of these projects as possible as you keep learning. Once you are somewhat comfortable with HTML and CSS, start learning some basic JavaScript (DOM manipulation, making AJAX calls etc) and learn how to add interactivity to your websites. While you are at it learn some basics of Git and GitHub. At this point you should be able to get an entry level frontend development job. Keep revisiting this roadmap and try to fill the gaps in your knowledge.
            </AccordianItem>
        </Accordian>
    </>
}
