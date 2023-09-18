import React from 'react';
import {useOverlayTriggerState} from '@react-stately/overlays';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer
} from '@react-aria/overlays';
import {useDialog} from '@react-aria/dialog';
import {FocusScope} from '@react-aria/focus';
import {useButton} from '@react-aria/button';

import styles from './styles.scss'

function ModalDialog(props) {
  let {title, children} = props;
  let ref = React.useRef();
  let {overlayProps, underlayProps} = useOverlay(props, ref);
	
  usePreventScroll();
  let {modalProps} = useModal();
  let {dialogProps, titleProps} = useDialog(props, ref);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={{
            background: 'white',
            color: 'black',
            padding: 30,
            width: '50%'
          }}>
          <h3
            {...titleProps}
            style={{marginTop: 0}}>
            {title}
          </h3>
          {children}
        </div>
      </FocusScope>
    </div>
  );
}

export default function Modal(props) {
  let state = useOverlayTriggerState({});
  let openButtonRef = React.useRef();
  let {buttonProps: openButtonProps} = useButton({
    onPress: () => state.open()
  }, openButtonRef);

  return <>
     <div>
        <button {...openButtonProps} ref={openButtonRef}>
          Open Dialog
        </button>
        {state.isOpen && (
          <OverlayContainer>
            <ModalDialog
              title={props.title}
              isOpen
              onClose={state.close}
              isDismissable
            >
              <div>
                {props.children}
              </div>
              <button className={styles.closeButton}>Close</button>
            </ModalDialog>
          </OverlayContainer>
        )}
      </div>
  </>;
}