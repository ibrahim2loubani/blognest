import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemSkeleton,
} from '@/components/ui/bento-grid'
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { FC } from 'react'

// interface IBlogsPageProps {

// }

const Skeleton = () => (
  <div className='flex size-full min-h-24 flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'></div>
)
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='size-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className='size-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className='size-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className='size-4 text-neutral-500' />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='size-4 text-neutral-500' />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='size-4 text-neutral-500' />,
  },
  // {
  //   title: 'The Spirit of Adventure',
  //   description: 'Embark on exciting journeys and thrilling discoveries.',
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className='size-4 text-neutral-500' />,
  // },
]

const BlogsPage: FC = () => {
  return (
    <>
      <BentoGrid className='mx-auto'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 3 ? 'md:col-span-2' : i === 5 ? 'md:col-span-3' : ''
            }
          />
        ))}
      </BentoGrid>
      <BentoGridItemSkeleton />
    </>
  )
}

export default BlogsPage
