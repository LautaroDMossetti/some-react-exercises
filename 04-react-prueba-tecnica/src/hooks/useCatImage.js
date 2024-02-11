import { useState, useEffect } from 'react'
import { getRandomImage3Words } from '../services/facts'
import { CAT_PREFIX_IMAGE_URL } from '../constants'

export const useCatImage = ({ fact }) => {
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')

    // to get random image of cat with 3 custom words in it
    getRandomImage3Words(firstThreeWords).then(url => setCatImage(url))
  }, [fact])

  return { catImage: `${CAT_PREFIX_IMAGE_URL}${catImage}` }
}
