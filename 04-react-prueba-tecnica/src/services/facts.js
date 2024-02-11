import { CAT_ENDPOINT_RANDOM_FACT, CAT_PREFIX_IMAGE_URL } from '../constants'

export const getRandomFact = () => {
  // calls the api and returns a fact
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => (data.fact))
}

export const getRandomImage3Words = (firstThreeWords) => {
  // calls the api and returns the url (without CARASS_URL) of an image with 3 custom words
  return fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstThreeWords}?json=true`)
    .then(res => res.json())
    .then(data => (data.url))
}
