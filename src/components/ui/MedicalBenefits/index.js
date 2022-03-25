import React from 'react'
import Divider from '../Divider';

import './style.css';

export default function MedicalBenefits(props) {

    const [selectedTab, setSelectedTab] = React.useState();
    const [tabs, setTabs] = React.useState(props.tabs);
    const [data, setData] = React.useState({ title: "", list: [] });

    React.useEffect(() => {
        if (props.data && props.data.length !== 0) {
            setTabs(props.tabs);
            setSelectedTab(0);
            setData(props.data[0]);
        }
    }, []);

    const handleClick = (index) => {
        setSelectedTab(index);
        setData(props.data[index]);
    }

    return (
        <section>
            <h2 className="text-center"><b>Special Medical Benefits</b></h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
            <div style={{ display: 'flex', flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>

                {
                    tabs.map((item, index) => (
                        <button className={selectedTab === index ? "button-selected-tab" : "button-unselected-tab"}
                            onClick={() => handleClick(index)}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>

            <div>
                <h3 style={{ fontStyle: 'italic' }}><b>{data?.title}</b></h3>

                <ul style={{ padding: '0 0 0 2rem', listStyle: 'outside' }}>
                    {data?.list?.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </section>
    )
}
