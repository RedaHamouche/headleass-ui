"use client";
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import mappingComponentsWithChildren from '../mappingComponentsWithChildren.js';
import mappingComponentsNoChildren from '../mappingComponentsNoChildren.js';
import mappingDefaults from '../mappingDefaults.js';


const MAPPING = {
	...mappingDefaults,
	...mappingComponentsWithChildren,
    ...mappingComponentsNoChildren
}

const Dynamic = forwardRef(({ type, components = [], ...rest }, ref) => {
  const MatchingComponent = MAPPING[type];

  if (!MatchingComponent) {
      // Gérez le cas où le composant n'est pas trouvé
    return `Composant "${type}" non trouvé`;
  }

  return (
    <MatchingComponent ref={ref} {...rest}>
      {components.map((props, index) => (
        props ?  <Dynamic key={index} {...props} /> : null
      ))}
    </MatchingComponent>
  );
});

Dynamic.displayName = "Dynamic";

Dynamic.defaultProps = {
  components: [],
};

Dynamic.propTypes = {
  type: PropTypes.string.isRequired,
  components: PropTypes.arrayOf(PropTypes.object),
};

export default Dynamic;
