mos = {
    "objectName": "AMCTCHGSTAT",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.AMCTChangeStatusSet",
    "description": "Non Persistent Table for Crew Type Status Changes",
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
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Identifies the crew's status. Valid status types are Active and Inactive. When you create a crew type, the default status is Active.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo about the status change.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AMCTCHANGESTAT",
            "source": "AMCREWT",
            "remarks": "Relationship to the non-persistent table AMCTCHGSTAT. (No Where Clause).",
            "whereClause": "",
            "cardinality": null
        }
    ]
}