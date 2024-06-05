import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import openDB from '../db';

export function AddTodo({ navigation }) {
    const [text, setText] = React.useState("");

    const db = openDB();
    
    criaTask = async () => {
        const statement = await db.prepareAsync(
            "INSERT INTO tasks (name, value) VALUES ($name, $value)"
          );
        let exec = await statement.executeAsync({ $name: text, $value: false });
        if (exec.lastInsertRowId != null && exec.changes > 0) {
            Alert.alert(
                "Sucesso",
                "Tarefa cadastrada com sucesso!",
                [
                    {
                        text: "Continuar",
                        onPress: () => navigation.navigate('Lista')
                    }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                label="Nome da tarefa"
                value={text}
                onChangeText={text => setText(text)}
            />
            <View style={{ padding: 16 }}></View>
            <Button mode="contained" onPress={criaTask}>
                Criar
            </Button>
        </View>
    );
}
