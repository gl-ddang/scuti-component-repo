import logo from './logo.svg';
import { PrimaryButton } from './components/Buttons/PrimaryButtons/PrimaryButton';
import Wrapper from './components/Layout/Wrapper'
import { colors } from '../src/Colors/Colors'
import styled from 'styled-components'

// modifies the TestButton with new style
// const ModifiedTestButton = styled(PrimaryButton)`
//   background-color: red;
// `

const RedButton = ({children}) => {
  return (
    <PrimaryButton hover active focus bgColor={colors.error100} fontColor={colors.textInverted}>
      {children}
    </PrimaryButton>
  )
}

function App() {
  return (
    <Wrapper>
        <img src={logo} className="App-lo go" alt="logo" />
        <PrimaryButton bgColor={colors.success100} hover active focus>Hi</PrimaryButton>
        <PrimaryButton bgColor={colors.warning200} hover>Hello</PrimaryButton>
        <PrimaryButton disabled>Primary Btn</PrimaryButton>
        <RedButton>Hi</RedButton>
    </Wrapper>
  );
}

export default App;
