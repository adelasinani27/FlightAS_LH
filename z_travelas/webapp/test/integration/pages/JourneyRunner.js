sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ztravelas/test/integration/pages/FlightASList",
	"ztravelas/test/integration/pages/FlightASObjectPage",
	"ztravelas/test/integration/pages/FlightDetailsASObjectPage"
], function (JourneyRunner, FlightASList, FlightASObjectPage, FlightDetailsASObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ztravelas') + '/test/flp.html#app-preview',
        pages: {
			onTheFlightASList: FlightASList,
			onTheFlightASObjectPage: FlightASObjectPage,
			onTheFlightDetailsASObjectPage: FlightDetailsASObjectPage
        },
        async: true
    });

    return runner;
});

