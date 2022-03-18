import MediaItem from '../mediaItem/mediaItem';

import { Medias, Media } from '../../interfaces';

import styles from './mediasGrid.module.scss';
import { useState } from 'react';

interface Props {
    medias: Medias
}

export default function MediasGrid({medias}: Props): JSX.Element | null {
    const [listboxIsOpen, setListbox] = useState(false)

    const toggleListbox = () => {
        listboxIsOpen ? setListbox(false) : setListbox(true);
    }

    return (
        <section className={styles.medias}>
            <div className={styles.sort}>
                <p className={styles.sort_title}>Trier par</p>
                <div className={styles.sort_listbox}>
                    <button className={styles.toggle_listbox} onClick={() => toggleListbox()}>
                        { listboxIsOpen ? "-" : "+" }
                    </button>

                    <button className={styles.category} id={styles.cat_popularity}>Popularité</button>
                    <button className={listboxIsOpen? styles.category : styles.hidden}>Date</button>
                    <button className={listboxIsOpen? styles.category : styles.hidden}>Titre</button>
                </div>
            </div>

            <ul className={styles.medias_grid}>
                { medias.map((media: Media, i: number) => (
                    <MediaItem media={media} key={i}/>
                ))}
            </ul>
        </section>
    )
}