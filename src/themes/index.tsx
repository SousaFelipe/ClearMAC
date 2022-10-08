


const themes = {

    'light': {
    
        'colorBrand':         '#00A083',
        'colorSecondary':     '#0090A1',
        'colorAccent':        '#84BE41',

        'colorTextPrimary':   '#3D4C57',
        'colorTextSecondary': '#566976',
        'colorTextDisabled':  '#90A4AE',

        'colorGray':          '#A0BACC',
        'colorLight':         '#D1DEE8',
        'colorWhite':         '#FFFFFF',

        'colorSuccess':       '#84BE41',
        'colorWarning':       '#FAC710',
        'colorError':         '#F24726',

        'colorWhatsApp':      '#25D366'
    }
}



export function getColor(color: string) : string {
    const colors = themes['light'];
    return ((colors as any)[color] || colors['colorTextPrimary']);
}



export default themes;
