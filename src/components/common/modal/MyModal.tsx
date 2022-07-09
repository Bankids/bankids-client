import styled from 'styled-components';
import ReactModal from 'react-modal';
import { clacRatio } from '../../../lib/styles/theme';
import { ReactComponent as ModalContentBanky } from '../../../assets/icons/modal-content-banky.svg';

// 모달 내부에 표시될 UI 작성
// @ts-expect-error
function MyModal({ onSubmit, onClose }) {
  function handleSubmit() {
    onSubmit();
  }
  function handleCancel() {
    onClose();
  }
  function renderSvgContent() {
    return <ModalContentBanky />;
  }
  return (
    <ReactModal
      isOpen
      preventScroll={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#191919',
          opacity: '0.7',
        },
        content: {
          height: '488px',
          position: 'absolute',
          // TODO: status bar 포함해서 정렬하는지 확인 필요!
          top: `${clacRatio(136, 760)}`,
          left: '18px',
          right: '18px',
          background: '#191919',
          overflow: 'hidden',
          WebkitOverflowScrolling: 'touch',
          border: 'none',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
      }}
    >
      <Content>
        <WhiteBox>
          {renderSvgContent()}
          <span className="main-label">가족이 생겼어요.</span>
          <span className="sub-label">기획에서 워딩 생각해주세요.</span>
        </WhiteBox>
        <OverlayBox>
          <button onClick={handleSubmit}>V</button>
        </OverlayBox>
      </Content>
    </ReactModal>
  );
}

export default MyModal;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhiteBox = styled.div`
  background: white;
  height: 424px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;

  svg {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 36px;
    padding-bottom: 36px;
  }

  .main-label {
    height: 21px;
    font-style: normal;
    font-weight: 800;
    font-size: 21px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  .sub-label {
    height: 14px;
    font-style: normal;
    font-size: 14px;
    color: #82818b; // TODO: color: 디자인 시스템 확인 필요
    margin-bottom: 36px;
  }
`;

const OverlayBox = styled.div`
  padding-top: 16px;
  button {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.palette.yellow[0]};
    border-radius: 12px;
  }
`;