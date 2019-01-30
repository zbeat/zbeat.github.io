mos = {
    "objectName": "AMCTSTATHIST",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCTStatusHistSet",
    "description": "Crew template status history",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCTSTATHISTID",
    "primaryKeyColumns": [
        "AMCTSTATHISTID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREWT",
            "targetObject": "AMCTSTATHIST",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Status",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCTSTATHIST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AMCTSTATHIST",
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
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "Identifies the type of work the crew is designed to perform.This value must be unique for all crew type records within an organization.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization to which the crew type belongs.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Current or historical status for the crew type.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Memo about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "The login I.D. of the person who changed the status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCTSTATHISTID",
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
            "name": "AMCTSTATHIST",
            "source": "AMCREWT",
            "remarks": "Relationship to the AMCTSTATHIST table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        }
    ]
}