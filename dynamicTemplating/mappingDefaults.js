import dynamic from 'next/dynamic';

const mappingDefaults = {
    PageContent: dynamic(() => import('../components/pages/pageContent'))
}

export default mappingDefaults
