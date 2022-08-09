import { useAppSelector } from '@store/app/hooks';
import {
  selectWalkingDongils,
  selectWalkingDongilsStatus,
} from '@store/slices/walkingDongilsSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SkeletonDongilList from './SkeletonDongilList';
import ContractNewDongilLink from './walking/ContractNewDongilLink';
import EmptyWalkingDongil from './walking/EmptyWalkingDongil';
import WalkingDongilList from './walking/WalkingDongilList';

function getWalkingDongilsContent() {
  const walkingDongilsStatus = useAppSelector(selectWalkingDongilsStatus);
  const walkingDongils = useAppSelector(selectWalkingDongils);

  let disable: 'true' | 'false' = 'false';
  if (walkingDongils !== null && walkingDongils.length === 5) {
    disable = 'true';
  }

  const navigate = useNavigate();
  function handleContractNewDongilButtonClick() {
    navigate('/create/1');
  }

  if (walkingDongilsStatus === 'loading') {
    return (
      <>
        <h1>걷고있는 돈길</h1>
        <SkeletonDongilList variant="walking" />
      </>
    );
  } else if (walkingDongilsStatus === 'succeeded') {
    if (walkingDongils?.length === 0) {
      return (
        <>
          <h1>걷고있는 돈길</h1>
          <EmptyWalkingDongil onClick={handleContractNewDongilButtonClick} />
        </>
      );
    } else {
      return (
        <>
          <h1>걷고있는 돈길</h1>
          <WalkingDongilList walkingDongils={walkingDongils!} />
          <ContractNewDongilLink disable={disable} to={'/create/1'} />
        </>
      );
    }
  } else if (walkingDongilsStatus === 'failed') {
    return <p>Failed</p>;
  }
}

export default getWalkingDongilsContent;

const Wrapper = styled.div``;