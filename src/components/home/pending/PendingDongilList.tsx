import { IDongil } from '@lib/types/IDongil';
import styled from 'styled-components';
import PendingDongilItem from './PendingDongilItem';

interface PendingDongilListProps {
  pendingDongils: IDongil[];
}

function PendingDongilList({ pendingDongils }: PendingDongilListProps) {
  return (
    <Wrapper>
      {pendingDongils?.map((pendingDongil) => (
        <PendingDongilItem
          key={pendingDongil.id}
          pendingDongil={pendingDongil}
        />
      ))}
    </Wrapper>
  );
}

export default PendingDongilList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
