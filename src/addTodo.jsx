import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export function AddTodo({ navigation }) {
    const [text, setText] = React.useState("");

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                label="Nome da tarefa"
                value={text}
                onChangeText={text => setText(text)}
            />
            <View style={{padding: 16}}></View>
            <Button mode="contained" onPress={() => navigation.navigate('Lista')}>
                Criar
            </Button>
        </View>
    );
}
