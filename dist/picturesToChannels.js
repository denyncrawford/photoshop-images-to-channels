(function () {
  'use strict';

  var cTID = function cTID(s) {
    return app.charIDToTypeID(s);
  };

  var sTID = function sTID(s) {
    return app.stringIDToTypeID(s);
  };

  var pasteInPlace = function pasteInPlace(enabled, withDialog) {
    if (enabled != undefined && !enabled) return;
    var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("inPlace"), true);
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  var _forEach = function _forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };
  var originalDoc = app.activeDocument;
  var documents = app.documents;
  originalDoc.changeMode(ChangeMode.MULTICHANNEL);
  originalDoc.activeChannels[0].name = originalDoc.name.split(".")[0];
  originalDoc.selection.selectAll();

  _forEach(documents, function (document, i) {
    if (!i) return;
    app.activeDocument = document;
    var doc = app.activeDocument;
    var name = doc.name.split(".")[0];
    var select = doc.selection;
    select.selectAll();
    select.copy();
    app.activeDocument = originalDoc;
    doc = app.activeDocument;
    var channels = doc.channels;
    var channel = channels.add();
    channel.name = name;
    channel.kind = ChannelType.SPOTCOLOR;
    channel.opacity = 100;
    var idInvr = charIDToTypeID("Invr");
    executeAction(idInvr, undefined, DialogModes.NO);
    pasteInPlace(true);
    select = doc.selection;
    select.selectAll();
  });

  _forEach(documents, function (document, i) {
    if (!i) return;
    document.close(SaveOptions.DONOTSAVECHANGES);
  });

}());
