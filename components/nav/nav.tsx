import styles from './nav.module.scss';

type Props = {
    tags: string[]
    setSelectedTag: (tag: string) => void
}

export default function Nav({tags, setSelectedTag}: Props): JSX.Element | null {
    return (
        <nav className={styles.nav}>
            { tags.map((tag: string, i: number) => (
                <button className="tag tag-btn" key={i} onClick={() => setSelectedTag(tag)}>#{tag}</button>
            ))}
        </nav>
    )
}