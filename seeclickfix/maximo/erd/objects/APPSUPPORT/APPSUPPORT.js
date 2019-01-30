mos = {
    "objectName": "APPSUPPORT",
    "className": "psdi.workflow.virtual.AppSupportSet",
    "description": "Action set to add WF options to applications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Name of type of Mbo supported by the process.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Name of Application where to add Workflow options.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CURRENTSUPPORT",
            "required": false,
            "persistent": false,
            "title": "Current Support",
            "remarks": "Extent of current support in the application for Workflow.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDSUPPORT",
            "required": true,
            "persistent": false,
            "title": "Add Support",
            "remarks": "Add support for Workflow to the application?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROUTEWF",
            "required": true,
            "persistent": false,
            "title": "Has ROUTEWF",
            "remarks": "Does the application have a ROUTEWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOPWF",
            "required": true,
            "persistent": false,
            "title": "Has StopWF",
            "remarks": "Does the application have a STOPWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYWF",
            "required": true,
            "persistent": false,
            "title": "Has HistoryWF",
            "remarks": "Does the application have a HISTORYWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNWF",
            "required": true,
            "persistent": false,
            "title": "Has AssignWF",
            "remarks": "Does the application have an ASSIGNWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWWF",
            "required": true,
            "persistent": false,
            "title": "Has ViewWF",
            "remarks": "Does the application have a VIEWWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HELPWF",
            "required": true,
            "persistent": false,
            "title": "Has HelpWF",
            "remarks": "Does the application have a HelpWF SigOption?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "APPSUPPORT",
            "source": "WFPROCESS",
            "remarks": "Parameter set for adding Workflow support to applications.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}