import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Full Screen Media',
  name: 'projectFullScreenMedia',
  type: 'document',
  icon: ImageIcon,
  preview: {
    select: {
      media: 'image',
      title: 'Media',
    },
    prepare(selection) {
      const {media} = selection
      return {
        title: 'Carousel Media',
        media,
      }
    },
  },
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'mux.video',
      description: 'Please only use an image or video field',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Please only use an image or video field',
    },
  ],
}
