const cTID = function(s) { return app.charIDToTypeID(s); };
const sTID = function(s) { return app.stringIDToTypeID(s); }; 

const pasteInPlace = (enabled, withDialog) => {
    if (enabled != undefined && !enabled) return;
    let dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
    const desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("inPlace"), true);
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  export { pasteInPlace }

