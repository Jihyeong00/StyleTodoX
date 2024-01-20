import * as stylex from '@stylexjs/stylex';
export const S = stylex.create({
  backModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'black',
    opacity: '70%',
  },
  form: {
    padding: 2,
    position: 'absolute',
    display: 'grid',
    left: '50%',
    top: '50%',
    background: 'white',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    width: '33%',
    height: '33%',
  },
  addButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  inputBox: {
    display: 'flex',
    gridRow: 'grid-row: span 3 / span 3',
    height: '100%',
    flexDirection: 'column',
  },
  input: {
    gridRow: 'grid-row: span 1 / span 1',
    height: "40%"
  },
  textArea: {
    gridRow: 'grid-row: span 2 / span 2',
    height: "60%"
  },
  h4:{
    text: 48
  }
});
