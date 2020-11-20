
import { pasteInPlace} from './methods'

let originalDoc  = app.activeDocument;
const documents = app.documents;

originalDoc.changeMode(ChangeMode.MULTICHANNEL)
originalDoc.activeChannels[0].name = originalDoc.name.split(".")[0]
originalDoc.selection.selectAll();

documents.forEach((document, i) => {
    if (!i) return;
    app.activeDocument = document;
    let doc = app.activeDocument;
    let name = doc.name.split(".")[0]
    let select = doc.selection;
    select.selectAll();
    select.copy();
    app.activeDocument = originalDoc;
    doc = app.activeDocument;
    let channels = doc.channels;
    let channel = channels.add()
    channel.name = name;
    channel.kind = ChannelType.SPOTCOLOR;
    channel.opacity = 100;
    var idInvr = charIDToTypeID( "Invr" );
    executeAction( idInvr, undefined, DialogModes.NO );
    pasteInPlace(true);
    select = doc.selection;
    select.selectAll();
});

documents.forEach((document, i) => {
    if(!i) return;
    document.close(SaveOptions.DONOTSAVECHANGES);
})