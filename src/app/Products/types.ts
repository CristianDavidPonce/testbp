export interface IProduct {
  id: string
  name: string
  description: string
  logo: string
  date_release: string
  date_revision: string
}
interface IRule {
  value?: boolean
  message: string
}

export type Errors = Record<keyof IProduct, IRule[]>
