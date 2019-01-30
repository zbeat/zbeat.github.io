mos = {
    "objectName": "AMCREWCHNGST",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.AMCrewChngStSet",
    "description": "Virtual table for Status",
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
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew ID",
            "remarks": "Crew Id",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization ID",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "Status",
            "remarks": "New status assigned to the crew.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": false,
            "title": "Change Date",
            "remarks": "Date and time the status was changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "A comment or note about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to get data from AMCREW for a given crew.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CREWSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWCHNGST",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWCHNGST (virtual) tables.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}