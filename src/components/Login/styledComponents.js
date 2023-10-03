import styled from 'styled-components'

export const LoginRoute = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const LoginForm = styled.form`
  height: 350px;
  width: 350px;
  background-color: ${props => (props.dark ? '#000' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  flex-shrink: 1;
  box-shadow: 0px 0px 16px -7px grey;
`
export const WebsiteLogo = styled.img`
  height: 40px;
  flex-shrink: 1;
`
export const UserInputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`
export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
`
export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  padding-left: 10px;
`
export const ShowPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
`
export const CheckBoxLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
`
export const Button = styled.button`
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  margin-left: 10px;
  font-weight: 500;
`
