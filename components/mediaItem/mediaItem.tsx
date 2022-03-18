import Image from 'next/image';
import heart from '../../assets/heart.svg';

import { Media } from '../../interfaces';

import styles from './mediaItem.module.scss';

interface Props {
    media: Media
}

export default function MediaItem({media}: Props): JSX.Element | null {
    const imgPath = `/${media.photographerId}/${media.image}`;
    const videoPath = `/${media.photographerId}/${media.video}`;

    return (
        <li className={styles.media}>
            <div className={styles.media_img}>
                { media.image
                    ? <img src={imgPath} alt=""/>
                    : <video src={videoPath} controls></video>
                }
            </div>
            <div className={styles.media_info}>
                <p>{media.desc}</p>
                <p>{media.price} €</p>
                <div>
                    <span>{media.likes} </span>
                    <Image src={heart} alt="heart" height="18px" width="18px" />
                </div>
            </div>
        </li>
    )
}