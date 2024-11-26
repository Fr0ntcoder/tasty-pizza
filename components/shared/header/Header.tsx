import cn from 'clsx'
import { User } from 'lucide-react'
import Image from 'next/image'

import { CartButton } from '@/components/shared/cart'
import Container from '@/components/shared/container'
import SearchInput from '@/components/shared/search-input'

import Button from '@/components/ui/button'

import styles from './Header.module.scss'

type Props = {
	className?: string
}

export const Header = ({ className }: Props) => {
	return (
		<header className={cn(styles.root, className)}>
			<Container className={styles.container}>
				<Image src='/logo.png' width={70} height={70} alt='logo' />
				<div className={styles.search}>
					<SearchInput />
				</div>
				<div className={styles.block}>
					<Button variant='outline' className={styles.btn}>
						<User size={16} />
						Войти
					</Button>
					<CartButton />
				</div>
			</Container>
		</header>
	)
}
