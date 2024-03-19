import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
  padding: 6rem 10rem;
  border-radius: 3rem;
  box-shadow: 0 2px 8px rgba(15, 15, 15, 0.6);
  background-color: #1c1c1c;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  margin: 1rem 0;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 16px;
  outline: none;
`;

export const ErrorText = styled.span`
  color: #eb5d5d;
  font-size: 18px;
  margin: 7px 0;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f3f0f0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;  
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #C0C1C5;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const TaskInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  margin: 1rem 0;
`;

export const TaskInput = styled.input`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 16px;
  outline: none;
`;

export const TaskButton = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f3f0f0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;  
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #C0C1C5;
  }
`;

