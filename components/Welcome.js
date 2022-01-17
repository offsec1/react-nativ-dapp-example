 import React, { useState } from 'react'
 import { View, Button, Text } from 'react-native'

const Welcome = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <View>
            <Text>Button pressed: {count} times </Text>
            <Button 
            title='Cick me'
            onPress={increaseCount} 
            />
        </View>
    )
}

export default Welcome;