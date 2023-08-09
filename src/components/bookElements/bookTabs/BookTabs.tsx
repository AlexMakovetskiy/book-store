import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import '../../../style/reset.scss';
import '../../../style/common.scss';
import './BookTabs.scss';

const TabSet = ({...tabinfo}) => {
    return (
        <Tabs>
            <TabList className="tabs-container custom-font">
                <Tab className="tabs-container__tab">Description</Tab>
                <Tab className="tabs-container__tab">Authors</Tab>
                <Tab className="tabs-container__tab">Reviews</Tab>
            </TabList>
        
            <TabPanel className="tabs-content">
                <p>{tabinfo.desc}</p>
            </TabPanel>
            <TabPanel className="tabs-content">
                <p>{tabinfo.authors}</p>
            </TabPanel>
            <TabPanel className="tabs-content">
                <p>{tabinfo.publisher}</p>
            </TabPanel>
        </Tabs>
    );
};

export default TabSet;