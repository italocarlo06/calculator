import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button : {
        width: Dimensions.get('window').width / 4 - 15,
        height: Dimensions.get('window').width / 4 - 15,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor: '#333',   
        color: '#FFF',
        fontSize: 35,
        textAlign: "center",
        padding: 15,
        marginTop: 15,
        marginLeft: 15,
    },
    operatorButton : {
        backgroundColor: '#e67e00',        
    },
    topOperatorButton : {
        backgroundColor: '#b3b3b3',
        color: '#000',
    },
    doubleButton : {
        width: Dimensions.get('window').width / 2 - 15,
        height: Dimensions.get('window').width / 4 - 15,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        textAlign: "left",
        paddingLeft: 30
    },
    operatorPressed: {
        backgroundColor: '#FFF',
        color: '#e67e00',
        borderColor: '#e67e00'
    }

})

interface BtnProps {
    onPress: () => void;
    label: string;
    type: "number" | "unary" | "binary"
    double?:boolean
    isOperator?: boolean
}

export function Btn({ type = "number", onPress, label, double = false, isOperator}: BtnProps){
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[
                styles.button, 
                type === "unary" 
                ? styles.topOperatorButton 
                : type === "binary"
                  ? styles.operatorButton
                  : {},
                double ? styles.doubleButton : {},
                isOperator ? styles.operatorPressed : {}
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}