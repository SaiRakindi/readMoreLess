// Write your code here
import {useState} from 'react'

import {
  HooksAppContainer,
  ContentContainer,
  HooksHeading,
  HooksDescription,
  HooksImage,
  HooksText,
  HooksButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readMore, setReadMore] = useState(false)

  const readLessDescription = reactHooksDescription.slice(0, 171)

  const reactHooksText = readMore ? reactHooksDescription : readLessDescription

  const buttonText = readMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setReadMore(prevState => !prevState)

  return (
    <HooksAppContainer>
      <ContentContainer>
        <HooksHeading>React Hooks</HooksHeading>
        <HooksDescription>Hooks are a new addition to React</HooksDescription>
        <HooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <HooksText>{reactHooksText}</HooksText>
        <HooksButton onClick={onClickButton}>{buttonText}</HooksButton>
      </ContentContainer>
    </HooksAppContainer>
  )
}

export default ReadMore
