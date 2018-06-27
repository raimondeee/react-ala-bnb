import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, css, withStylesPropTypes } from '../helpers/withStyles';

class HighlightingTextarea extends React.PureComponent {
  static propTypes = {
    ...withStylesPropTypes,
    initialHtml: PropTypes.string,
    cssMap: PropTypes.objectOf(PropTypes.object)
  };

  handleRef = ref => {
    this.editor = ref;

    if(this.observer) {
      this.observer.disconnect();
    }
    console.log('ref', ref);

    const mu = new MutationObserver(this.handleMutation);
    mu.observe(ref, {characterData: true, subtree: true});

    this.observer = mu;
  };

  handleMutation = (record) => {
    const el = this.editor;
    const { innerHTML, innerText } = el;
    if(innerHTML.match(/</) && innerHTML !== this.props.initialHtml) {

      const p = getCaretCharacterOffsetWithin(el);
      el.innerHTML = innerText;
      setCaretPositionWithin(el.firstChild, p);

    }
    console.log(record);
  };

  handleFocus = ({nativeEvent}) => {
    if(nativeEvent.relatedTarget) { // assume focus from keyboard
      const { lastChild } = this.editor;
      // in a textarea, the default caret position is at the end
      setCaretPositionWithin(lastChild, (lastChild.innerText || lastChild).length);
    }
  };

  componentDidMount() {
    const { cssMap } = this.props;
    this.editor.innerHTML = this.props.initialHtml;
    Object.keys(cssMap).forEach(tag => {
      const els = this.editor.getElementsByTagName(tag);
      for (let index = 0; index < els.length; index++) {
        const el = els[index];
        Object.entries(cssMap[tag]).forEach(([key, value]) => {
          if(key === 'style') {
            Object.entries(value).forEach(([sk, sv]) => {
              el.style[sk] = sv;
            });
          }
          else { // className ?
            el[key] = value;
          }
        });
        console.log(el);        
      }
    });
  }

  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.container)} contentEditable ref={this.handleRef} onFocus={this.handleFocus} />      
    );
  }
}

function getCaretCharacterOffsetWithin(element) {
  let caretOffset = 0;
  const doc = element.ownerDocument || element.document;
  const win = doc.defaultView || doc.parentWindow;
  const sel = win.getSelection();
  if (sel.rangeCount > 0) {
    const range = win.getSelection().getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    caretOffset = preCaretRange.toString().length;
  }

  return caretOffset;
}

function setCaretPositionWithin(element, chars=-1) {
  if(chars < 0) return;
  const doc = element.ownerDocument || element.document;
  const win = doc.defaultView || doc.parentWindow;
  const selection = win.getSelection();
  const range = doc.createRange();

  range.selectNode(element);
  range.setStart(element, chars);
  range.setEnd(element, chars);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
};

export default withStyles(() => ({

  container: {
    border: '1px inset gray',
    padding: 10
  }

}))(HighlightingTextarea);