import SkeletonSummary from '@components/common/skeletons/SkeletonSummary';
import challengeAPI from '@lib/apis/challenge/challengeAPI';
import { IWeekDTO } from '@lib/apis/challenge/challengeDTO';
import { HOME_REFETCH_INTERVAL } from '@lib/constants/HOME_REFETCH_INTERVAL';
import queryKeys from '@lib/constants/queryKeys';
import { useQuery } from 'react-query';
import styled, { css } from 'styled-components';
import Summary from './Summary';

function KidSummary() {
  const { data: kisSummary } = useQuery(
    queryKeys.CHALLENGE_PROGRESS,
    challengeAPI.getChallengeProgress,
    {
      refetchInterval: HOME_REFETCH_INTERVAL,
      suspense: true,
    },
  );

  return (
    <SummaryWrapper>
      <Summary
        variant="KidHome"
        currentSavings={kisSummary?.currentSavings}
        totalPrice={kisSummary?.totalPrice}
      />
    </SummaryWrapper>
  );
}

export default KidSummary;

export const kidSummaryWrapperStyle = css`
  margin-top: 198px;
`;

const SummaryWrapper = styled.div`
  ${kidSummaryWrapperStyle}
`;
