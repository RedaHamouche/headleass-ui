import dynamic from 'next/dynamic';

const mappingComponentsNoChildren = {
    Accordion: dynamic(() => import('../components/noChildren/Accordion')),
    Text: dynamic(() => import('../components/noChildren/text'))
};

export default mappingComponentsNoChildren;