mos = {
    "objectName": "AMCREWSTATHIS",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewStatHisSet",
    "description": "Crew Status Change History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWSTATHISID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "STATUS",
        "CHANGEDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWSTATHIS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWSTATHIS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AMCREWSTATHIS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Change By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The crew type's status can change over time. For each status change, Maximo displays  the status, the date and time of the change, the user I.D. of the person who changed the status, and any remarks entered about the status change. If there have been no status changes, Maximo displays the crew type's current status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "The login I.D. of the person who changed the crew type's status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time the status was changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Notes about the crew type's status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "AMCREWSTATHISID",
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
            "name": "AMCREWSTATHIS",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWSTATHIS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        }
    ]
}