import { NumberButton } from 'components/numberPad/NumberPad';
import { SafeView } from 'components/shared';
import React, { useCallback, useEffect, useState } from 'react';
import { TextMask } from 'react-native-masked-text';
import { useMutation } from 'react-query';
import localStorageService from 'services/apis/localStorageService';
import OauthService from 'services/apis/OauthService';
import { useAuthorization } from 'services/context/AuthProvider';

import { CodeBoxContainer, CodeBoxTextView, LockContainer } from './LockStyled';
import { numbers } from './NumnersList';

export const LockScreen: React.FC = () => {
  const [pinCode, setPinCode] = useState<any>([]);
  const { signIn } = useAuthorization();
  const login = useMutation(OauthService.login);

  const handleClearPassCode = () => {
    setPinCode(['', '', '', '']);
  };

  const handleSubmitPassCode = useCallback(async () => {
    const passCodeStringVal = pinCode.join('');
    if (passCodeStringVal.length === 4) {
      await login.mutateAsync(passCodeStringVal.toString());
      const user = await localStorageService.getAccessToken();
      signIn(user);
    }
    handleClearPassCode();
  }, [pinCode, signIn]);

  useEffect(() => {
    (async function () {
      try {
        if (!pinCode.includes('')) {
          await handleSubmitPassCode();
        }
      } catch (error) {
        console.log(error);
        handleClearPassCode();
      }
    })();
  }, [pinCode]);

  const onPressNumber = (number: string) => {
    const passCode = [...pinCode];
    for (let i = 0; i < passCode.length; i++) {
      if (passCode[i] == '') {
        passCode[i] = number;
        break;
      } else {
        continue;
      }
    }
    setPinCode(passCode);
  };
  return (
    <SafeView>
      <LockContainer>
        <CodeBoxContainer>
          {pinCode.map((item: any) => (
            <CodeBoxTextView key={Math.random()} isNumber={item}>
              <TextMask
                value={item}
                type={'custom'}
                options={{
                  mask: '*',
                  translation: {
                    '#': function (val) {
                      if (val === ' ') {
                        return val;
                      }
                      return null;
                    },
                    '*': function (val) {
                      return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
                    },
                  },
                }}
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 50,
                }}
              />
            </CodeBoxTextView>
          ))}
        </CodeBoxContainer>
        <NumberButton number={numbers} onPress={onPressNumber} />
      </LockContainer>
    </SafeView>
  );
};
