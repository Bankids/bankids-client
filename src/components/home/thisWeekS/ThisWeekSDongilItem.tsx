import { TItemName } from '@lib/types/kid';
import renderItemIllust from '@lib/utils/common/renderItemIllust';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as AchievedStamp } from '@assets/illusts/etc/stamp_parent.svg';
import { EDongilStatus } from '@lib/types/common';

interface ThisWeekSDongilItemProps {
  itemName: TItemName;
  title: string;
  status: EDongilStatus;
  to: string;
}

function ThisWeekSDongilItem({
  itemName,
  title,
  status,
  to,
}: ThisWeekSDongilItemProps) {
  return (
    <StyledLink to={to}>
      <div className="left-aligned-wrapper">
        <div className="item-wrapper">{renderItemIllust(itemName)}</div>
        <span>{title}</span>
      </div>
      <div className="stamp-wrapper">
        {status === EDongilStatus.SUCCEEDED && <AchievedStamp />}
      </div>
    </StyledLink>
  );
}

export default ThisWeekSDongilItem;

const StyledLink = styled(Link)`
  width: 100%;
  height: 54px;
  background: ${({ theme }) => theme.palette.greyScale.white};
  border-radius: ${({ theme }) => theme.radius.medium};
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-aligned-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .item-wrapper {
      width: 30px;
      margin-left: 16px;
    }
    span {
      margin-left: 12px;
      ${({ theme }) => theme.typo.button.Title_T_14_EB};
      color: ${({ theme }) => theme.palette.greyScale.black};
    }
  }
  .stamp-wrapper {
    margin-right: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;