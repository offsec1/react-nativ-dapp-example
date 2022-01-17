 import React, { useState } from 'react'
 import { View, Button, Text } from 'react-native'
 import { useMoralis } from "react-moralis";


const Welcome = () => {
    const [count, setCount] = useState(0);
    const { authenticate, isAuthenticated, user } = useMoralis();

    const increaseCount = () => {
        setCount(count + 1);
    }

    if (!isAuthenticated) {
        return (<div>
            <button onClick={() => authenticate()}>Authenticate</button>
          </div>)
    }

    return (
        <View>
            <Text>Welcome {user.get("username")} </Text>
            <Text>Button pressed: {count} times </Text>
            <Button 
            title='Cick me'
            onPress={increaseCount} 
            />
        </View>
    )
}

export default Welcome;