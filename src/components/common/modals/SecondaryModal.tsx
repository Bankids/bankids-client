import styled from 'styled-components';
import { ReactComponent as CongratsGoal } from '@assets/illusts/congrats/congrats_goal.svg';
import ReactModal from 'react-modal';
import CheckButton from '../buttons/CheckButton';
import { calcRatio } from '@lib/styles/theme';
import './styles.css';
import { useState } from 'react';

interface SecondaryModalProps {
  /** badge에 표시될 내용을 입력합니다. */
  badgeText: string;
  /** header에 표시될 내용을 입력합니다. */
  headerText: string;
  /** body에 표시될 내용을 입력합니다. */
  bodyText: string;
}

// 모달 내부에 표시될 UI 작성
function SecondaryModal({
  badgeText,
  headerText,
  bodyText,
}: SecondaryModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  function handleSubmit() {
    setIsOpen(false);
  }

  const reactModalParams = {
    isOpen: isOpen,
    onRequestClose: handleSubmit,
    shouldCloseOnOverlayClick: true,
    closeTimeoutMS: 125,
    style: {
      overlay: {
        zIndex: '700',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(36, 39, 41, 0.7)',
      },
      content: {
        height: '552px',
        position: 'absolute',
        top: 'calc(var(--vh, 1vh) * 50)',
        transform: 'translate3d(0, -50%, 0)',
        left: '18px',
        right: '18px',
        background: 'rgba(36, 39, 41, 0)',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        border: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
  };

  return (
    // @ts-expect-error
    <StyledReactModal {...reactModalParams}>
      <Content>
        <WhiteBox>
          <div className="illust-wrapper">
            <CongratsGoal />
          </div>
          <span className="badge">{badgeText}</span>
          <span className="header">{headerText}</span>
          <div className="body">{bodyText}</div>
        </WhiteBox>
        <CheckButtonOverlay onClick={handleSubmit} />
        <CheckButtonWrapper>
          <CheckButton onClick={handleSubmit} />
        </CheckButtonWrapper>
      </Content>
    </StyledReactModal>
  );
}

export default SecondaryModal;

const StyledReactModal = styled(ReactModal)`
  @keyframes slide {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50%);
    }
  }
  animation: slide ${({ theme }) => theme.animation.modalOpen};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WhiteBox = styled.div`
  background: ${({ theme }) => theme.palette.greyScale.white};
  height: 488px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.large};

  padding-left: 16px;
  padding-right: 16px;

  .illust-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 293px;

    margin-top: 32px;
    margin-bottom: 8px;
  }

  svg {
    width: ${calcRatio(202, 292)};
  }

  .badge {
    width: 97px;
    height: 26px;

    background: ${({ theme }) => theme.palette.main.yellow100};
    border-radius: ${({ theme }) => theme.radius.large};

    ${({ theme }) => theme.typo.tag.T_12_EB};
    color: ${({ theme }) => theme.palette.main.yellow400};

    line-height: 26px;
    vertical-align: center;
    display: inline-block;
    text-align: center;
  }

  .header {
    margin-top: 16px;
    ${({ theme }) => theme.typo.popup.Title_T_21_EB};
    color: ${({ theme }) => theme.palette.greyScale.black};
  }

  .body {
    margin-top: 16px;
    ${({ theme }) => theme.typo.popup.Sub_S_14_R}
    color: ${({ theme }) => theme.palette.greyScale.grey600};
    line-height: 150%;

    display: flex;
    align-items: center;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const CheckButtonOverlay = styled.button`
  width: 100%;
  height: 64px;
  cursor: default;
`;

const CheckButtonWrapper = styled.div`
  margin-top: 504px;
  position: absolute;
  z-index: 701;
`;
