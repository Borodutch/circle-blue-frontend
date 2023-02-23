import { BodyText, HeaderText } from 'components/Text'
import Mint from 'components/Mint'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-1'),
  padding('px-4', 'pt-6')
)
const mintContainer = classnames(display('flex'), padding('pt-6'))
export default function () {
  return (
    <div className={container}>
      <HeaderText>Yo WTF is that exchange up to?</HeaderText>
      <BodyText>Anyway, connect your wallet and mint the 🔵</BodyText>
      <BodyText>I know you want it, you know you want it, go ahead</BodyText>
      <div className={mintContainer}>
        <Mint />
      </div>
    </div>
  )
}
