'use client'

import cn from 'clsx'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import ReactStories from 'react-insta-stories'

import { Api } from '@/services/api-clients'
import { TStory } from '@/services/stories'

import styles from './Stories.module.scss'

interface Props {
	className?: string
}

export function Stories({ className }: Props) {
	const [stories, setStories] = useState<TStory[]>([])
	const [open, setOpen] = useState<boolean>(false)
	const [selectedStory, setSelectedStory] = useState<TStory>()

	useEffect(() => {
		async function fetchStories() {
			const data = await Api.stories.getAll()

			setStories(data)
		}

		fetchStories()
	}, [])

	const onClickStory = (story: TStory) => {
		setSelectedStory(story)
		if (story.items.length > 0) {
			setOpen(true)
		}
	}

	const skeletonList = [...Array(6)].map((_, i) => (
		<div className={styles.stories__skeleton} key={i}></div>
	))

	const storyList = stories.map(item => (
		<div
			className={styles.stories__item}
			key={item.id}
			onClick={() => onClickStory(item)}
			style={{
				backgroundImage: `url(${item.previewImageUrl})`
			}}
		></div>
	))

	return (
		<div className={cn(styles.stories, className)}>
			<div className={styles.stories__list}>
				{stories.length === 0 ? skeletonList : storyList}
			</div>
			{open && (
				<div className={styles.stories__overlay}>
					<div className={styles.stories__block}>
						<button
							className={styles.stories__btn}
							onClick={() => setOpen(false)}
						>
							<X />
						</button>
						<ReactStories
							onAllStoriesEnd={() => setOpen(false)}
							stories={
								selectedStory?.items.map(item => ({ url: item.sourceUrl })) ||
								[]
							}
							defaultInterval={10000}
							width={520}
							height={800}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
