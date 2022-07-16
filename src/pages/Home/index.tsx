import { Route, Routes } from 'react-router-dom';
import HomeParent from './parent/HomeParent';
import PendingKid from './kid/PendingKid';
import Base from '@components/layout/Base';
import Stacked from '@components/layout/Stacked';
import HomeKid from './kid/HomeKid';
import PendingParent from './parent/PendingParent';
import NowParent from './parent/NowParent';
import CreateKid from './kid/CreateKid';
import { useAppSelector } from '@store/app/hooks';
import { selectIsKid } from '@store/slices/authSlice';

function HomeRouter() {
  const isKid = useAppSelector(selectIsKid);
  return (
    <Routes>
      <Route
        path="/"
        element={<Base>{isKid ? <HomeKid /> : <HomeParent />}</Base>}
      />
      <Route
        path="pending/:challengeId"
        element={
          isKid ? (
            <Stacked label="대기중인 돈길">
              <PendingKid />
            </Stacked>
          ) : (
            <Stacked label="제안받은 돈길">
              <PendingParent />
            </Stacked>
          )
        }
      />
      <Route
        path="/now/:challengeId"
        element={
          <Stacked label="걷고있는 돈길">
            <NowParent />
          </Stacked>
        }
      />
      <Route
        path="/create/:step"
        element={
          <Stacked label="돈길 계약하기">
            <CreateKid />
          </Stacked>
        }
      />
    </Routes>
  );
}

export default HomeRouter;
