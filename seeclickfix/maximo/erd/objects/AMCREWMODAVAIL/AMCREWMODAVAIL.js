mos = {
    "objectName": "AMCREWMODAVAIL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewModAvailSet",
    "description": "Crew's modavail table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWMODAVAILID",
    "primaryKeyColumns": [
        "AMCREWMODAVAILID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWMODAVAIL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWMODAVAIL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Start Time",
            "sameAsAttribute": "STARTTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "End Time",
            "sameAsAttribute": "ENDTIME",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": true,
            "title": "Hours",
            "remarks": "Work Hours",
            "sameAsAttribute": "WORKHOURS",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "REASONCODE",
            "required": false,
            "persistent": true,
            "title": "Reason Code",
            "remarks": "Reason Code",
            "sameAsAttribute": "REASONCODE",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": true,
            "title": "Work Date",
            "remarks": "Work Date",
            "sameAsAttribute": "WORKDATE",
            "sameAsObject": "MODAVAIL"
        },
        {
            "attributeName": "DAY",
            "required": false,
            "persistent": false,
            "title": "Day",
            "remarks": "Day of the week",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWMODAVAILID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AMCREWMODAVAIL",
            "source": "AMCREW",
            "remarks": "Relationship to AMCREWMODAVAIL table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MODAVAIL",
            "source": "AMCREW",
            "remarks": "Relationship from amcrew to modavail.",
            "whereClause": "amcrew = :amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}