const detailAddStyles = {
    wrapQuanlity: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        gap: '0 20px'
    },
    title: {
        fontSize: '1.4rem',
        color: '#787878',
        mr: 1,
        userSelect: 'none'
    },
    remove: {
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eff0f5',
        borderRadius: '2px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8,
        }
    },
    add: {
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eff0f5',
        borderRadius: '2px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8,
        }
    },
    wrapBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0 20px',
        mt: 3
    },
    btnBuyNow: {
        width: '100%',
        height: '44px',
        backgroundColor: '#FF3945',
        borderRadius: '4px',
        fontSize: '1.6rem',
        fontWeight: 500,
        color: '#fff',
        cursor: 'pointer',
        userSelect: 'none'
    },
    btnInstallment: {
        width: '100%',
        height: '44px',
        border: '1px solid #1A94FF',
        backgroundColor: 'transparent',
        borderRadius: '4px',
        fontSize: '1.6rem',
        fontWeight: 500,
        color: '#1A94FF',
        cursor: 'pointer',
        userSelect: 'none'


    }
}

export default detailAddStyles