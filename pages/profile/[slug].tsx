import { GetStaticPaths } from 'next'

import MainProfile from '../../components/mainProfile/mainProfile';
import MediasGrid from '../../components/mediasGrid/mediasGrid';

import { Medias, Photographer } from '../../interfaces';

interface Props {
    medias: Medias,
    photographer: Photographer
}

export default function Profile({medias, photographer}: Props): JSX.Element | null {
  return (
    <>
      <MainProfile photographer={photographer} />
      <MediasGrid medias={medias}/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://raw.githubusercontent.com/marie-bu/MarieBurki_6_23022021/main/FishEyeDataFR.json')
  const data = await res.json()

  const paths = data.photographers.map((photographer: Photographer) => ({
    params: {
      slug: `${photographer.id}`,
      id: photographer.id
    },
  }))

  return { paths, fallback: false }
}

interface Props {
    params: {
      id: number,
      slug: string
    }
}

export async function getStaticProps({params}: Props): Promise<Record<string, unknown>> {
  const res = await fetch('https://raw.githubusercontent.com/marie-bu/MarieBurki_6_23022021/main/FishEyeDataFR.json')
  const data = await res.json()

  console.log(params.slug) // why undefined ????

  let selectedPhotographer: Photographer | any = {}
  const medias: Medias = []

  for (let media of data.media) {
    if (media.photographerId == parseInt(params.slug)) {
      medias.push(media)
    }
  }

  for (let photographer of data.photographers) {
    if (photographer.id == parseInt(params.slug)) {
      selectedPhotographer = photographer
    }
  }

  return {
    props: {
      medias: medias,
      photographer: selectedPhotographer
    }
  }
}