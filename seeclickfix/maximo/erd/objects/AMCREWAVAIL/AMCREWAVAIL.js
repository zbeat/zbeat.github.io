mos = {
    "objectName": "AMCREWAVAIL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.AMCrewAvailSet",
    "description": "Crew Availability table",
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
            "attributeName": "DAY",
            "required": false,
            "persistent": false,
            "title": "Day",
            "remarks": "The day of the week.",
            "sameAsAttribute": "DAY",
            "sameAsObject": "PERSONAVAIL"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Start Time",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": false,
            "title": "End Time",
            "remarks": "End Time",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": false,
            "title": "Work Hours",
            "remarks": "Work Hours",
            "sameAsAttribute": "WORKHOURS",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "REASONCODE",
            "required": false,
            "persistent": false,
            "title": "Reason Code",
            "remarks": "Reason Code",
            "sameAsAttribute": "REASONCODE",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": false,
            "title": "Work Date",
            "remarks": "Work Date",
            "sameAsAttribute": "WORKDATE",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Identifies the crew.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SYNONYMDOMAIN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REASONCODE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to REASONCODE.",
            "whereClause": "domainid='RSNCODE' and value=:reasoncode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWAVAIL",
            "source": "AMCREW",
            "remarks": "Relationship to AMCREWAVAIL table.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}