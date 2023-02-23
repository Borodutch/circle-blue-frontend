import MainBlock from 'components/MainBlock'
import Root from 'components/Root'
import WalletProvider from 'components/WalletProvider'

export default function () {
  return (
    <WalletProvider>
      <Root>
        <MainBlock />
      </Root>
    </WalletProvider>
  )
}
