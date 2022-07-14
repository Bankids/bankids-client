import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '@assets/icon/arrow-left.svg';
interface TopAppBarProps {
  /**
   * 이전 페이지명
   */
  label: string;
}

function TopAppBar({ label }: TopAppBarProps) {
  const navigate = useNavigate();

  const onClickTopAppBar = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <div onClick={onClickTopAppBar}>
        <Arrow />
      </div>
      <p>{label}</p>
    </Wrapper>
  );
}

export default TopAppBar;

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  cursor: pointer;

  & > :first-child {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -16px;
  }

  p {
    //TODO : 보류
    font-family: 'TmoneyRoundWind';
    font-size: 17px;
    line-height: 100%;
    font-weight: 800;
    color: ${({ theme }) => theme.palette.greyScale.black};
  }
`;
