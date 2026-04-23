import AiCard from '@/component/AiCard';
import { Tag } from '@heroui/react';
import React from 'react';

const AisPage =async () => {
    // const res = await fetch('http://localhost:3001/ai',{next:{tags:['revali']}})
    // const datas = await res.json()
    // console.log(datas)
    return (
        <div>
            {/* <h1 className=''>Total AI: {datas.length}</h1> */}
            {/* <div className="grid grid-cols-3 gap-3">
                {
                    datas.map(ai=> <AiCard key={ai.id} ai={ai} ></AiCard>)
                }
            </div> */}
        </div>
    );
};

export default AisPage;