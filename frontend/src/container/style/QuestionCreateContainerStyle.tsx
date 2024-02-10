import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding: 15px;
  margin: 40px auto;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 500;
  position: relative;
`

export const BackButtonWrap = styled.div`
  cursor: pointer;

  img {
    width: 9px;
    height: 15px;
  }
`

export const Span = styled.div`
  width: 9px;
  height: 10px;
`

export const Title = styled.div`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
`
