import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import HomeProgressBar from '@components/Home/HomeProgressBar'
import HomeStatistics from '@components/Home/HomeStatistics'
import HomeDictionary from '@components/Home/SecondStage/HomeDictionary'
import HomeCommunityCard from '@components/Home/SecondStage/HomeCommunityCard'
import RecommendChatCard from '@components/Home/SecondStage/RecommendChatCard'

// 애니메이션 키프레임 정의
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const AnimatedCard = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`

const Index = () => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCard(true)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div>
      {showCard && (
        <AnimatedCard>
          <RecommendChatCard />
        </AnimatedCard>
      )}
      <HomeProgressBar currentStage={2} />
      <HomeDictionary />
      <HomeStatistics />
      <HomeCommunityCard />
    </div>
  )
}

export default Index