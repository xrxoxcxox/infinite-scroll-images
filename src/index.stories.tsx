import type { ComponentStory, ComponentMeta } from "@storybook/react"
import { InfiniteScrollImages } from "./"

const image1 = 'https://picsum.photos/200?random=1'
const image2 = 'https://picsum.photos/200?random=2'
const image3 = 'https://picsum.photos/200?random=3'
const image4 = 'https://picsum.photos/200?random=4'
const image5 = 'https://picsum.photos/200?random=5'

const images = [image1, image2, image3, image4, image5]

export default {
  title: "InfiniteScrollImages",
  component: InfiniteScrollImages,
  args: {
    images: images,
    imageHeight: 200,
    duration: 10
  },
} as ComponentMeta<typeof InfiniteScrollImages>

const Template: ComponentStory<typeof InfiniteScrollImages> = (args) => <InfiniteScrollImages {...args} />

export const Default = Template.bind({})
