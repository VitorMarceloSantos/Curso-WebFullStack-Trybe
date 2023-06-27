export type CardProps = {
  city: string,
  country: string,
  imageUrl: string,
  visited?: boolean,
}

export type PropsReturn = {
  cardInfo: {
    info: CardProps,
    index: number
  }
}