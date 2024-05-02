import './Btn.css';
import { useTranslation } from 'react-i18next'

export default function Btn() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }

    return (
        <>
            <button className='btn' type='submit'>{t('services.btn')}</button>
        </>
    )
}