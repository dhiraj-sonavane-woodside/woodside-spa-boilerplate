import { green } from '@mui/material/colors'
import { createTheme, ThemeOptions } from '@mui/material/styles'

export enum ColorConstants {
    PRIMARY_COLOR = '#032B43',
    SECONDARY_COLOR = '#27C5FF',
    BLACK_COLOR = '#161214',
    INFO_COLOR = '#5dabd5',
    ACTION_COLOR = '#27ce88',
    ACCENT_COLOR = '#fbb040',
    SUCCESS_COLOR = '#4caa6a',
    POSITIVE_COLOR = '#e4f6e0',
    ERROR_COLOR = '#C83E4D',
    LIGHT_ERROR_COLOR = '#ffd6db',
    WARNING_COLOR = '#f57147',
    TINT1_COLOR = '#1b4864',
    TINT2_COLOR = '#2c6080',
    TINT3_COLOR = '#4e6d8f',
    TINT4_COLOR = '#7c9bb3',
    TINT5_COLOR = '#a6bdce',
    TINT6_COLOR = '#d7e3e9',
    TINT7_COLOR = '#e8eff2',
    TINT8_COLOR = '#f1f5f7',
    WHITE_COLOR = '#FFF',
    GREY_COLOR = '#7a7879',
}

const theme = createTheme({})
const themeOptions = {} as ThemeOptions

themeOptions.palette = {
    mode: 'light',
    primary: {
        light: ColorConstants.PRIMARY_COLOR,
        main: ColorConstants.PRIMARY_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.PRIMARY_COLOR,
    },
    secondary: {
        light: ColorConstants.SECONDARY_COLOR,
        main: ColorConstants.SECONDARY_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.SECONDARY_COLOR,
    },
    success: {
        light: ColorConstants.SUCCESS_COLOR,
        main: ColorConstants.SUCCESS_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.SUCCESS_COLOR,
    },
    info: {
        light: ColorConstants.INFO_COLOR,
        main: ColorConstants.INFO_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.INFO_COLOR,
    },
    error: {
        light: ColorConstants.ERROR_COLOR,
        main: ColorConstants.ERROR_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.ERROR_COLOR,
    },
    warning: {
        light: ColorConstants.WARNING_COLOR,
        main: ColorConstants.WARNING_COLOR,
        contrastText: ColorConstants.WHITE_COLOR,
        dark: ColorConstants.WARNING_COLOR,
    },
}

themeOptions.components = {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
            disableTouchRipple: true,
        },
    },
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            disableElevation: true,
            disableFocusRipple: true,
            disableTouchRipple: true,
        },
        styleOverrides: {
            root: {
                height: 46,
                fontWeight: 500,
                fontSize: 16,
                textAlign: 'center',
                letterSpacing: 0,
                textTransform: 'none',
            },
        },
    },
    MuiIconButton: {
        defaultProps: {
            disableRipple: true,
            disableFocusRipple: true,
            disableTouchRipple: true,
        },
        styleOverrides: {
            root: {
                borderRadius: 'unset',
                '&:hover': {
                    backgroundColor: `unset !important`,
                },
            },
        },
    },
    MuiButtonGroup: {
        defaultProps: {
            disableRipple: true,
            disableFocusRipple: true,
            disableElevation: true,
        },
    },
    MuiAppBar: {
        defaultProps: {
            elevation: 0,
        },
    },
    MuiTooltip: {
        defaultProps: {
            enterDelay: 200,
            enterNextDelay: 200,
        },
        styleOverrides: {
            tooltip: {
                backgroundColor: ColorConstants.PRIMARY_COLOR,
                fontSize: 14,
                fontWeight: 400,
                maxWidth: 250,
                wordWrap: 'break-word',
                borderRadius: 3,
            },
            popper: {
                marginTop: -5,
            },
        },
    },
    MuiPaper: {
        defaultProps: {
            elevation: 4,
        },
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                height: 60,
                minHeight: '60px !important',
                maxHeight: 60,
                paddingLeft: 'unset !important',
                paddingRight: 'unset !important',
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                backgroundColor: ColorConstants.TINT3_COLOR,
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                color: ColorConstants.PRIMARY_COLOR,
                padding: 10,
                '&:hover': {
                    backgroundColor: `${ColorConstants.TINT8_COLOR} !important`,
                },
                whiteSpace: 'initial',
            },
        },
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderBottom: '1px solid #6af0b8',
                height: 48,
            },
            head: {
                color: `${ColorConstants.TINT4_COLOR}`,
            },
            body: {
                color: `${ColorConstants.PRIMARY_COLOR}`,
            },
            stickyHeader: {
                backgroundColor: ColorConstants.WHITE_COLOR,
            },
        },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                padding: 'unset',
            },
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: 5,
            },
        },
    },
}

const WoodsideTheme = createTheme(themeOptions)
export default WoodsideTheme
