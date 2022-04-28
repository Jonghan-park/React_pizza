import styled from "styled-components";

export const ScrollToTopContainer = styled.div`
  position: relative;
`
export const ScrollToTopIconContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;
`

export const ScrollToTopIcon  = styled.div`
  font-size: 2.4rem;
  text-align: center;
  align-items: center;
  background-color: #fdc500;
  border: 2px solid #e31837;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #e31837;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all .5s ease-in-out;

  &:hover{
    animation: none;
    background-color: #e31837;
    color: #fdc500;
    border: 2px solid #fdc500;
  }

  @keyframes movebtn {
    0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(20px);
  }
  50%{
    transform: translateY(0px);
  }
  75%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
  }
  }
`


