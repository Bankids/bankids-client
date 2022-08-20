import styled from 'styled-components';
import { ReactComponent as Banki } from '@assets/illusts/banki/banki_giveup.svg';
import Button from '@components/common/buttons/Button';
import { NavigateFunction } from 'react-router-dom';
import { TInterestRate } from '@lib/types/IInterestRate';

interface GiveUpProps {
  // TODO: 여러개의 바텀시트 컨텐츠를 하나의 UI 컴포넌트에서 연속적으로 사용하는 경우가 많아서
  // onLeftButtonClick, onRightButtonClick 과 같은 네이밍은 좋지 않은것 같습니다.
  // onCancelButtonClick, onDeleteButtonClick 과 같이 더 명시적인 네이밍이 좋은것 같습니다.
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
  title: string;
  interestRate: TInterestRate;
}

function DongilFailed({
  onLeftButtonClick,
  onRightButtonClick,
  title,
  interestRate,
}: GiveUpProps) {
  return (
    <Wrapper>
      <Container>
        <p>돈길 걷기에 실패했어요</p>
        <BankiWrapper>
          <Banki />
        </BankiWrapper>
        <Rule>
          <p>돈길 '{title}'</p>
          <p>이자부스터 {interestRate}%</p>
          <p>
            {interestRate === 20
              ? '저금을 3번 넘게 하지 않아 챌린지가 실패했어요.'
              : '저금을 1번 넘게 하지 않아 챌린지가 실패했어요.'}
          </p>
        </Rule>
      </Container>
      <ButtonContainer>
        <Button label="삭제하기" property="sub" onClick={onLeftButtonClick} />
        <Button label="내역보기" onClick={onRightButtonClick} />
      </ButtonContainer>
    </Wrapper>
  );
}

export default DongilFailed;

const Wrapper = styled.div``;

const Container = styled.div`
  margin: 29px 16px 36px 16px;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 16px;

  & > p:first-child {
    ${({ theme }) => theme.typo.popup.Title_T_21_EB}
    color: ${({ theme }) => theme.palette.sementic.red300};
  }
`;

const BankiWrapper = styled.div`
  height: 185px;
  padding: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rule = styled.div`
  background-color: ${({ theme }) => theme.palette.greyScale.grey100};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.medium};
  & > p {
    ${({ theme }) => theme.typo.bottomSheet.S_12_R}
    color: ${({ theme }) => theme.palette.greyScale.grey600};
    &:last-child {
      margin-top: 6px;
    }
  }
  & > p:first-child {
    ${({ theme }) => theme.typo.bottomSheet.T_14_EB}
    color: ${({ theme }) => theme.palette.greyScale.grey600};
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 8px;
`;
