import React from "react";

import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth'
import { COLORS } from "../../theme";

import { Button } from '../Button';


import { styles } from './styles';



export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>

      <Button
        title="Entrar com GitHub"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  )
}