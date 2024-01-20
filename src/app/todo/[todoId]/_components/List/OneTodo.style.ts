import  * as stylex from '@stylexjs/stylex'

export const S = stylex.create({
    container : {
        display: "flex",
        flexDirection: "column",
        border: '1px solid rgba(0,0,0,0.9)',
        padding: 2,
        borderRadius: 10
    },
    "flex-between": {
        display: "flex",
        justifyContent: "space-between"
    },
    pointer: {
        cursor: "pointer"
    }
});