import { Button, Flex, Text } from '@sadang-new/ui';
import { useState } from 'react';

import HotelMockButton from '@components/playground/HotelMockButton';
// import SlowComponent from '@components/playground/SlowComponent';
import UseCallbackTest from '@components/playground/UseCallbackTest';

function PlaygroundPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex direction="column" style={{ maxWidth: 700, margin: '0 auto' }}>
      <Text bold={true} style={{ margin: 40 }}>
        🙈 Playground
      </Text>
      <HotelMockButton />
      {/* <SlowComponent /> */}
      <UseCallbackTest />

      {isOpen === true ? <Text>모달 오픈</Text> : null}
      <Button onClick={() => setIsOpen(prev => !prev)}>모달열기</Button>
    </Flex>
  );
}

export default PlaygroundPage;
