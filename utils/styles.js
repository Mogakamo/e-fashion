import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles ({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#fff',
            marginLeft: 10,
        },
    },

    main: {
        minHeight: '100vh',
    },

    footer: {
        textAlign: 'right',
    },
})

export default useStyles