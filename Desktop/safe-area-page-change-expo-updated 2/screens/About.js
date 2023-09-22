import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from '@rneui/themed';



export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Welcome to the About Page!</Text>
            <Avatar
                    size={32}
                    rounded
                    icon={{ name: "pencil", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "#9700b9" }}
                />
            <StatusBar style="auto" />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
                type="clear"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
