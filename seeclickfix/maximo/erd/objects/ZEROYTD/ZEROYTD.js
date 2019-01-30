mos = {
    "objectName": "ZEROYTD",
    "className": "psdi.app.labor.virtual.ZeroYTDSet",
    "description": "Non-Persistent table to apply Zero Year to Date",
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
            "attributeName": "BREPORTED",
            "required": true,
            "persistent": false,
            "title": "Zero YTD Regular Hours",
            "remarks": "Is Reported hours selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BOVERTIME",
            "required": true,
            "persistent": false,
            "title": "Zero YTD Premium Hours",
            "remarks": "Is YTDOTHRS selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BOTREFUSED",
            "required": true,
            "persistent": false,
            "title": "Zero YTD Overtime Refused Hours",
            "remarks": "Is YTDHRSREFUSED selected?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ZEROYTD",
            "source": "LABOR",
            "remarks": "Relationship to the nonpersistent parameter set to apply  zero year to date.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}