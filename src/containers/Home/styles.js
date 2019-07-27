import styled from 'styled-components'
import { Flex } from 'grid-styled'

//TODO:

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.mainBackground};
`
export const Text = styled(Flex)`
  color: ${({ theme }) => theme.fonts.primary.color};
`
