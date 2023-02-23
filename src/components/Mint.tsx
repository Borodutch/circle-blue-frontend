import { BodyText } from 'components/Text'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import ABI from 'models/ABI'
import Button from 'components/Button'
import env from 'helpers/env'

export default function () {
  const { isConnected } = useAccount()
  const { data: mintData, write } = useContractWrite({
    abi: ABI,
    address: env.VITE_CONTRACT as `0x${string}`,
    functionName: 'mint',
    mode: 'recklesslyUnprepared',
    overrides: {
      value: ethers.utils.parseEther('0.013'),
    },
  })
  const {
    isLoading: mintIsLoading,
    isSuccess,
    isError: mintIsError,
    error: mintError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  })
  if (!isConnected) {
    return <ConnectButton accountStatus="address" />
  }
  return (
    <>
      <Button
        onClick={() => {
          write()
        }}
        title={mintIsLoading ? 'Minting...' : 'Mint!'}
        disabled={mintIsLoading}
      />
      {isSuccess && <BodyText>Minted! Now mint another one!</BodyText>}
      {mintIsError && <BodyText>Error minting: {mintError?.message}</BodyText>}
    </>
  )
}
