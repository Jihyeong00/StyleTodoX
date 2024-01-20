import  * as stylex from '@stylexjs/stylex'

export const S = stylex.create({
    container: {
        height: "calc(80vh - 20px)",
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        justifyContent: 'center'
    },
    buttonBar: {
        display: "grid",
        gridTemplateColumns : "repeat(2, minmax(0, 1fr))",
        width: "100%",
        textAlign: "center",
        cursor: "pointer"
    },
    leftButton: {
        borderRadius: '0',
        borderTopLeftRadius : '10px'
    },
    rightButton: {
        borderRadius: '0',
        borderTopRightRadius : '10px'
    },
    activeButton: {
        background: 'black',
        opacity: '80%'
    }
});
