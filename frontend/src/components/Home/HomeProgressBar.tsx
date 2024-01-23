import * as h from '@src/components/style/HomeProgressBarStyle'
import { ProgressBarType } from '@src/types/components/HomeType'

const stageList = [
  {
    stage: 1,
    text: '입양 설문 완료',
  },
  {
    stage: 2,
    text: '입양 진행중',
  },
  {
    stage: 3,
    text: '입양 수락전',
  },
]

const HomeProgressBar = (props: ProgressBarType) => {
  const { currentStage } = props

  return (
    <h.Container>
      {stageList.map(item => (
        <h.Item key={item.stage}>
          <h.Circle $active={currentStage >= item.stage} />
          <h.Text>{item.text}</h.Text>
        </h.Item>
      ))}
    </h.Container>
  )
}

export default HomeProgressBar
