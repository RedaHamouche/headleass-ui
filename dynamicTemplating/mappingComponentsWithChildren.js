import dynamic from 'next/dynamic';

const mappingComponentsWithChildren = {
  PopOver: dynamic(() => import('../components/withChildren/radix/PopOver')),
  Dialog: dynamic(() => import('../components/withChildren/Dialog'))
};

export default mappingComponentsWithChildren;