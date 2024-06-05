import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Checkbox, FAB, List, MD3Colors } from 'react-native-paper';
import openDB from '../db';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

export function ListTodo({ navigation }) {
    const [tasks, setTasks] = React.useState([]);

    const db = openDB();

    async function fetchData() {
        const statement = await db.getAllAsync("SELECT * FROM tasks");
        const tasks = statement;
        setTasks(tasks);
    }

    const toggleTaskCompletion = async (task) => {
        try {
            const updatedValue = task.value === 1 ? 0 : 1;
            const statement = await db.prepareAsync(
                "UPDATE tasks SET value = $value WHERE id = $id"
            );
            await statement.executeAsync({ $value: updatedValue, $id: task.id });
            fetchData();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <ScrollView>
                <List.Section>
                    {tasks.map(task => (
                        <List.Item
                            key={task.id}
                            title={task.value === 1 ? (
                                <Text style={{ textDecorationLine: 'line-through' }}>{task.name}</Text>
                            ) : (
                                task.name
                            )}
                            right={() => (
                                <Checkbox
                                    status={task.value ? 'checked' : 'unchecked'}
                                    onPress={() => toggleTaskCompletion(task)}
                                />
                            )}
                        />
                    ))}
                </List.Section>
            </ScrollView>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => navigation.navigate('Adicionar')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})