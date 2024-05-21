import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Checkbox, FAB, List, MD3Colors } from 'react-native-paper';

export function ListTodo({ navigation }) {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <List.Section>
                <List.Item title="First Item" left={() => <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />} />
                <List.Item
                    title="Second Item"
                    left={() => <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />}
                />
            </List.Section>
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