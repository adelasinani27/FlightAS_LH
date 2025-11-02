sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(MessageToast, MessageBox) {
    'use strict';

    return {
        /**
         * Custom handler for "Go to Web" button
         */
        onGoToWeb: function(oContext, aSelectedContexts) {
            if (!aSelectedContexts || aSelectedContexts.length === 0) {
                MessageToast.show("No record selected.");
                return;
            }

            const oSelected = aSelectedContexts[0].getObject();
            var url = oSelected.Url; // ✅ matches CDS definition

            if (url && url.trim() !== "") {
                // open the URL in a new tab
                window.open(url, "_blank");
            } else {
                // show warning message if URL is missing
                MessageBox.warning("The URL does not exist for this record.");
            }
        }
    };
});
