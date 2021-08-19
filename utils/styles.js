import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles ({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#fff',
            marginLeft: 10,
        },
    },

    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },

    grow: {
        flexGrow: 1,
    },

    main: {
        minHeight: '100vh',
    },

    footer: {
        textAlign: 'right',
        borderTop: 10,
    },
})

export default useStyles