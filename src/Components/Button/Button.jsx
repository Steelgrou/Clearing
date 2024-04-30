import './Button.css';
import { useTranslation } from 'react-i18next'

export default function Button() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (
        <>
            <button className='button' type='submit'>{t('contact.button')}</button>

        </>
    )
}