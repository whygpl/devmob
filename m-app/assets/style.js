import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#3498db',
        padding: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    featuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 8,
    },
    featureBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '22%',
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 10,
        elevation: 5,
    },
    featureName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#3498db',
        fontSize: 16,
        marginLeft: 10,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    contentText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    taskItem: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    taskTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskDescription: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    eventItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        elevation: 5,
    },
    eventDateTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    eventDate: {
        color: '#3498db',
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventTime: {
        color: '#555',
        fontSize: 16,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    eventLocation: {
        fontSize: 14,
        color: '#777',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
    },
    swiperContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 8,
        backgroundColor: '#ccdbf6',
        height: 230,
        padding: 5
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        flex: 1,
    },
});

export{ styles };