import {
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const headerText = classnames(
  fontSize('text-xl', 'md:text-2xl'),
  fontWeight('font-bold'),
  textAlign('text-center'),
  textColor('text-blue-800')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(
  textAlign('text-center'),
  textColor('text-blue-700'),
  fontWeight('font-extrabold')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
