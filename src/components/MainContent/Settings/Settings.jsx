import s from './Settings.module.css'
import SettingsHeadings from './SettingsHedings/SetingsHeadings'
import SettingsList from './SettingsList.jsx/SettingsList';


const Settings = (props) => {
    debugger;
    let settingsListInfo = props.SettingsData.SettingsContent.map(el => (<SettingsList Heading={el.Heading}/>))
    return (
        <div>
            <SettingsHeadings />
            {settingsListInfo }
        </div>

    )
}

export default Settings;