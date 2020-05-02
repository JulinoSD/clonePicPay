import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
    width: 60 px;
    height: 60px;
    border-radius: 30px;
    align-items: center
    justify-content: center;
`;

export const Label = styled.Text`
color: ${({focused})=> focused ? '#000' : '#fff'}
font-size: 12px;
`;