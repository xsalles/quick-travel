import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoText from '../../../assets/images/icons/logo+text.svg'

export default function FirstOnBoarding() {
  return (
    <SafeAreaView className='flex-1 flex flex-col items-center bg-primary'>
      
      <LogoText style={{marginTop: 52}}/>

    </SafeAreaView>
  )
}