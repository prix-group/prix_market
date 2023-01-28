import { Marketplace } from '@components/Marketplace';
import { cars } from '@/src/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [carsData, setCarsData] = useState(undefined);
  const pageId = router.query.pageId;

  useEffect(() => {
    setCarsData(cars[pageId - 1]);
  });

  // const carsData = cars[pageId - 1}];

  return <>{carsData && <Marketplace carsData={carsData} />}</>;
}
