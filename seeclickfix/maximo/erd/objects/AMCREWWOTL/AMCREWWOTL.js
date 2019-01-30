mos = {
    "objectName": "AMCREWWOTL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.labor.AMCrewWoTlSet",
    "description": "Persistent table for temporary tool data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWWOTLID",
    "primaryKeyColumns": [
        "AMCREWWOTLID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWWOTL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWWOTL",
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
            "attributeName": "TASKID",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Task ID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TOOLSEQ",
            "required": true,
            "persistent": true,
            "title": "Tool Seq",
            "remarks": "Identifies a generic name of a tool used to perform the work.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        },
        {
            "attributeName": "TOOLNUM",
            "required": false,
            "persistent": true,
            "title": "Tool Number",
            "remarks": "Tool Number.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSET",
            "required": false,
            "persistent": true,
            "title": "Asset Number",
            "remarks": "Asset Number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Asset Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset Number",
            "remarks": "Asset Number.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Crew",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "AMCREWWOTLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWTOOLSQ",
            "target": "AMCREWTOOLSQ",
            "remarks": "Relationship from table AMCREWWOTL to AMCREWTOOLSQ.",
            "whereClause": "amcrew=:amcrew and toolseq=:toolseq",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship from table AMCREWWOTL to ASSET.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWWOTL",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWWOTL.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}