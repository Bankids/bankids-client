import { TItemName } from '@lib/types/kid';
import { IDongil } from '@store/slices/walkingDongilSlice';
import styled from 'styled-components';
import WalkingDongilItem from './WalkingDongilItem';

function WalkingDongilList({ walkingDongils }: { walkingDongils: IDongil[] }) {
  return (
    <Wrapper>
      {walkingDongils?.map((walkingDongil) => (
        <WalkingDongilItem
          key={walkingDongil.id}
          itemName={walkingDongil.itemName as TItemName}
          title={walkingDongil.title}
          isFailed={!walkingDongil.isAchieved && !walkingDongil.status}
          to={`/walking/${walkingDongil.id}`}
          interestRate={walkingDongil.interestRate}
        />
      ))}
    </Wrapper>
  );
}

export default WalkingDongilList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
