import React from 'react';
import docs from '../../documentation.json'
import './Documentation.css'
const Documentation = () => {

    const [docsArr, setDocsArr] = React.useState(docs.arr)

    React.useEffect(() => {
        setDocsArr(docs.arr)
    }, [docs])

    return (
        <div className='dark:text-white p-20px'>
            {docsArr.map(x =>
                <div key={x.id}>
                    <h3 className='text-34px'>{x.library}</h3>
                    <p className='text-24px'>{x.type}</p>
                    <span className=''>{x.description}</span>
                    <div className='border border-add_dark mt-5'></div>
                </div>)}
        </div>
    );
};

export default Documentation;