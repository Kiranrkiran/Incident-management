sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidentscapfive/test/integration/pages/IncidentsList.gen",
	"ns/incidentscapfive/test/integration/pages/IncidentsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidentscapfive') + '/test/flpSandbox.html#nsincidentscapfive-tile',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

